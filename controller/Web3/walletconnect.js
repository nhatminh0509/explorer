import ReduxService from "../Redux/redux"
import WalletConnect from "@walletconnect/client"
import WalletConnectQRCodeModal from '@walletconnect/qrcode-modal'
import { checkHuaweiDevice, getDataLocal, getWalletConnectHuaweiLink, removeDataLocal, saveDataLocal } from "../../common/function"
import { OBSERVER_KEY, WALLET_CONNECT_APP } from "../../common/constants"
import Observer from "../../common/observer"
import { convertUtf8ToHex } from "@walletconnect/utils"

const DEFAULT_BRIDGE = 'https://bridge.keyringpro.com'
const INITIAL_STATE = {
  connector: null,
  connected: false,
  chainId: 0,
  accounts: [],
  address: '',
  session: {}
}
let connector

export default class WalletConnectServices {
  static async initialize (prevConnector = null, isMobile = false) {
    try {
      if (prevConnector) {
        let oldSession = getDataLocal('wallet_connect_session')
        connector = new WalletConnect({ session: oldSession || prevConnector.session, bridge: DEFAULT_BRIDGE })
      } else {
        if (isMobile) {
          connector = new WalletConnect({
            bridge: DEFAULT_BRIDGE,
            session: INITIAL_STATE.session
          })
        } else {
          connector = new WalletConnect({
            bridge: DEFAULT_BRIDGE,
            qrcodeModal: WalletConnectQRCodeModal,
            session: INITIAL_STATE.session
          })
        }
      }

      ReduxService.updateWalletConnect({ connector })

      if (!connector.connected) {
        await connector.createSession({ chainId: parseInt(process.env.NEXT_PUBLIC_WEB3_NETWORK_ID_ALLOWED) })
      } else {
        const { accounts, chainId, peerMeta } = connector
        this.onConnect(connector, accounts, chainId, peerMeta)
      }

      this.subscribeToEvents()
    } catch (error) {
      console.log('walletconnect initialize', error)
    }
  }

  static async refresh(isMobile = false) {
    let walletConnect = ReduxService.getWalletConnect()
    const prevConnector = walletConnect.connector
    this.initialize(prevConnector, isMobile)
  }

  static subscribeToEvents () {
    if (!connector) {
      return
    }

    connector.on('session_update', (error, payload) => {
      console.log('session_update', error, payload)
      if (error) {
        throw error
      }

      // get updated accounts and chainId
      const { accounts, chainId } = payload.params[0]
      this.onSessionUpdate(accounts, chainId)
    })

    connector.on('session_request', (error, payload) => {
      console.log('session_request', error, payload)
      if (error) {
        throw error
      }
    })

    connector.on('connect', (error, payload) => {
      console.log('connect', error, payload)
      if (error) {
        throw error
      }

      // get updated accounts and chainId
      const { accounts, chainId, peerMeta } = payload.params[0]
      this.onConnect(connector, accounts, chainId, peerMeta)
      saveDataLocal('wallet_connect_session', connector.session)
    })

    connector.on('disconnect', (error, payload) => {
      console.log('disconnect', error, payload)
      if (error) {
        throw error
      }

      // delete connector
      this.onDisconnect()
    })
  }

  static onSessionUpdate (accounts, chainId) {
    const address = accounts[0]
    ReduxService.updateWalletConnect({
      chainId,
      accounts,
      address
    })
  }

  static onDisconnect () {
    this.resetApp()
  }

  static resetApp () {
    // update redux state
    ReduxService.updateWalletConnect(INITIAL_STATE)
    ReduxService.resetUser()
    Observer.emit(OBSERVER_KEY.CHANGED_ACCOUNT)
    removeDataLocal('wallet_connect_session')
  }

  static formatIOSMobile = (uri, entry) => {
    const encodedUri = encodeURIComponent(uri)
    return entry.mobile.universal
      ? `${entry.mobile.universal}/wc?uri=${encodedUri}`
      : entry.mobile.native
        ? `${entry.mobile.native}${entry.mobile.native.endsWith(':') ? '//' : '/'}wc?uri=${encodedUri}`
        : ''
  }

  static killSession = () => {
    if (connector) {
      connector.killSession()
    }
    this.resetApp()
  }


  static deeplinkOpenApp = () => {
    const walletConnect = ReduxService.getWalletConnect()
    if (isMobile && walletConnect.appConnected) {
      if (walletConnect.appConnected.name.startsWith('KEYRING') || walletConnect.appConnected.name.startsWith('PREMA') || walletConnect.appConnected.name.startsWith('NMB48')) {
        if (isAndroid && checkHuaweiDevice(mobileModel)) {
          let link = getWalletConnectHuaweiLink(walletConnect.appConnected.name.toString(), 'wc?uri=wc:' + walletConnect.session.handshakeTopic + '@1')
          window.location.href = link
        } else {
          window.location.href = walletConnect.appConnected.mobile.universal + '/wc?uri=wc:' + walletConnect.session.handshakeTopic + '@1'
        }
      } else {
        window.location.href = WalletConnectServices.formatIOSMobile(walletConnect.connector.uri, walletConnect.appConnected)
      }
    }
  }

  static async onConnect (connector, accounts, chainId, peerMeta) {
    const address = accounts[0]
    const { name } = peerMeta
    const appConnected = WALLET_CONNECT_APP.find(item => item.name.toLowerCase().startsWith(name?.toLowerCase()))
    const callbackSignIn = () => {
      Observer.emit(OBSERVER_KEY.ALREADY_SIGNED)
    }

    await ReduxService.updateWalletConnect({
      connector,
      connected: true,
      chainId,
      accounts,
      address,
      session: connector.session,
      appConnected
    })
    ReduxService.loginWalletConnect(callbackSignIn, null, true)
  }

  static sendTransaction (tx) {
    let walletConnect = ReduxService.getWalletConnect()
    const { connector } = walletConnect
    if (!(connector && connector.connected)) {
      this.killSession()
      return
    }

    return new Promise((resolve, reject) => {
      // Sign transaction
      connector
        .sendTransaction(tx)
        .then((result) => {
          // Returns signed transaction
          return resolve(result)
        })
        .catch((error) => {
          // Error returned when rejected
          return reject(error)
        })
    })
  }

  static signPersonalMessage (message, address) {
    let walletConnect = ReduxService.getWalletConnect()
    const { connector } = walletConnect
    if (!(connector && connector.connected)) {
      this.killSession()
      return
    }
    const msgParams = [
      convertUtf8ToHex(message),
      address
    ]

    return new Promise((resolve, reject) => {
      // Sign transaction
      connector
        .signPersonalMessage(msgParams)
        .then((result) => {
          // Returns signed transaction
          return resolve(result)
        })
        .catch((error) => {
          // Error returned when rejected
          return reject(error)
        })
    })
  }
}
