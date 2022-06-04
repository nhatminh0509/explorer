import { CONNECTION_METHOD } from '../../common/constants'
import { lowerCase, showNotification } from '../../common/function'
import Web3Services from '../Web3'
import MetamaskServices from '../Web3/metamask'
import WalletConnectServices from '../Web3/walletconnect'
import { setBalance, setWalletConnect, setMetamask, setUserData } from './slice/appSlice'
import { store } from './store'

export default class ReduxService {
  static async callDispatchAction (action) {
    store.dispatch(action)
  }

  static getMetaMask () {
    const { app } = store.getState()
    const { metamask } = app
    return metamask
  }

  static getWalletConnect () {
    const { app } = store.getState()
    const { walletConnect } = app
    return walletConnect
  }

  static getConnectionMethod () {
    const { app } = store.getState()
    const { connectionMethod } = app
    return connectionMethod
  }
  
  static getUserData () {
    const { app } = store.getState()
    const { userData } = app
    return userData
  }

  static async updateUserData (data) {
    const userData = this.getUserData()    
    const newUser = { ...userData, ...data }
    ReduxService.callDispatchAction(setUserData(newUser))
  }

  static async updateMetamask (data) {
    const metamask = this.getMetaMask()
    let newMetamask = { ...metamask, ...data }
    ReduxService.callDispatchAction(setMetamask(newMetamask))
  }
  
  static async updateWalletConnect (data) {
    const { app } = store.getState()
    const { walletConnect } =  app
    let newWalletConnect = { ...walletConnect, ...data }
    ReduxService.callDispatchAction(setWalletConnect(newWalletConnect))
  }

  static resetUser () {
    ReduxService.callDispatchAction(setUserData(null))
  }

  static async loginMetamask(callbackAfterLogin = null, callbackError = null, hasSign = false) {
    return new Promise(async (resolve, reject) => {
      const metamask = this.getMetaMask()
      let currentWeb3 = window.ethereum

      try {
        if (!currentWeb3) {
          showNotification('txtWarningInstallMetaMask TODO')
          // showNotification(messages.txtWarningInstallMetaMask)
          return resolve(null)
        }

        const findNetwork = parseInt(process.env.NEXT_PUBLIC_WEB3_NETWORK_ID_ALLOWED)
        let network = findNetwork || 0
        if (parseInt(metamask.network) !== network) {
          showNotification('onlySupportNetwork TODO')
          // showNotification(messages.onlySupportNetwork)
          return resolve(null)
        }

        if (metamask.accounts) {
          let isSigned = ReduxService.checkIsSigned()
          if (!isSigned) {
            if (hasSign) {
              this.connectMetamaskWithSign(callbackAfterLogin, callbackError)
            } else {
              this.connectMetamaskWithOutSign(callbackAfterLogin, callbackError)
            }
          } else {
            callbackAfterLogin && callbackAfterLogin()
            return resolve(null)
          }
        } else {
          return resolve(null)
        }

      } catch (error) {
        callbackError && callbackError()
        return reject(error)
      }
    })
  }

  static connectMetamaskWithSign (callbackAfterLogin = null, callbackError = null) {
    return new Promise(async (resolve, reject) => {
      try {
        const metamask = this.getMetaMask()
        // TODO: Call API
        const msgHash = {
          token: 'NhatMinh0509'
        }
        let signature = await MetamaskServices.signPersonalMessage(metamask.address, msgHash ? msgHash.token : 'SIGN MESSAGE')
        if (signature) {
          let newMetaMask = Object.assign({}, metamask)
        console.log('new', newMetaMask)
          ReduxService.updateMetamask(newMetaMask)
          let newUserLogin = Object.assign({}, { address: metamask.address, sig: signature })
          // TODO: Call api get user
          ReduxService.updateUserData(newUserLogin)
          ReduxService.refreshUserBalance()
          callbackAfterLogin && callbackAfterLogin()
          return resolve()
        } else {
          showNotification('txtWarningActiveMetaMask TODO')
          // showNotification(messages.txtWarningActiveMetaMask)
          ReduxService.callDispatchAction(setUserData({}))
          ReduxService.callDispatchAction(setUserInfo({}))
          callbackError && callbackError()
          return reject()
        }
      } catch (error) {
        showNotification('txtWarningSigninMetaMaskError TODO')
        // showNotification(messages.txtWarningSigninMetaMaskError)
        reject(error)
      }
    })
  }

  static async connectMetamaskWithOutSign (callbackAfterLogin = null, callbackError = null) {
    return new Promise(async (resolve, reject) => {
      try {
        const metamask = this.getMetaMask()
        let newMetaMask = Object.assign({}, metamask)
        this.updateMetamask(newMetaMask)
        let newUserLogin = Object.assign({}, { address: metamask.address })
        ReduxService.updateUserData(newUserLogin)
        ReduxService.refreshUserBalance()
        callbackAfterLogin && callbackAfterLogin()
        return resolve()
      } catch (error) {
        showNotification('txtWarningSigninMetaMaskError TODO')
        callbackError && callbackError()
        reject(error)
      }
    })
  }

  static async refreshUser () {
    const userData = this.getUserData()
    const isSigned = ReduxService.checkIsSigned()
    if (isSigned) {
      // Call api get user
      // let resUser = await HubService.getUserBySignatureHub(userData.sig)
      let resUser = { address: userData?.address }
      if (resUser && resUser.address) {
        let newUser = {
          ...userData,
          ...resUser
        }
        ReduxService.callDispatchAction(setUserData(newUser))
        ReduxService.refreshUserBalance()
      } else {
        ReduxService.callDispatchAction(setUserData(null))
      }
    }
  }

  static async loginWalletConnect (callbackAfterLogin = null, callbackError = null, hasSign = false) {
    return new Promise(async (resolve, reject) => {
      const { app } = store.getState()
      const { walletConnect } = app
      try {
        if (!walletConnect.connector) {
          showNotification('txtWarningSigninMetaMaskError TODO')
          return resolve(null)
        }

        const findNetwork = parseInt(process.env.NEXT_PUBLIC_WEB3_NETWORK_ID_ALLOWED)

        let netword = findNetwork || 0

        if (walletConnect.chainId !== netword) {
          // showNotification(messages.onlySupportNetwork.replace('[network]', network))
          showNotification('onlySupportNetwork TODO')
          ReduxService.updateWalletConnect({ connected: false })
          walletConnect.connector.killSession()
          return resolve(null)
        }
        if (walletConnect.address) {
          let isSigned = ReduxService.checkIsSigned()
          if (!isSigned) {
            if (hasSign) {
              ReduxService.walletConnectWithSign(callbackAfterLogin, callbackError)
            } else {
              ReduxService.walletConnectWithoutSign(callbackAfterLogin, callbackError)
            }
          } else {
            callbackAfterLogin && callbackAfterLogin()
            return resolve(null)
          }
        } else {
          ReduxService.callDispatchAction(setUserData(null))
          return resolve(null)
        }
      } catch (error) {
        callbackError && callbackError()
        return reject(error)
      }
    })
  }

  static walletConnectWithoutSign = (callbackAfterLogin = null, callbackError = null) => {
    return new Promise(async (resolve, reject) => {
      const walletConnect = this.getWalletConnect()
      try {
        let newUserLogin = Object.assign({}, { address: walletConnect.address })
        ReduxService.updateUserData(newUserLogin)
        ReduxService.refreshUserBalance()
        callbackAfterLogin && callbackAfterLogin()
      } catch (error) {
        showNotification('TODO')
        // showNotification(messages.txtWarningActiveMetaMask)
        callbackError && callbackError()
        reject(error)
      }
    })
  }
  
  static walletConnectWithSign = (callbackAfterLogin = null, callbackError = null) => {
    return new Promise(async (resolve, reject) => {
      const walletConnect = this.getWalletConnect()
      try {
        const address = walletConnect.address
        // TODO: Call API
        const msgHash = {
          token: 'NhatMinh0509'
        }
        let signature = await WalletConnectServices.signPersonalMessage(msgHash && msgHash.token ? msgHash.token : 'SIGN MESSAGE', address)
        if (signature) {
          let newUserLogin = Object.assign({}, { address: walletConnect.address, sig: signature })
          // TODO: Call api get user
          ReduxService.updateUserData(newUserLogin)
          ReduxService.refreshUserBalance()
          callbackAfterLogin && callbackAfterLogin()
          return resolve()
        } else {
          if (window.localStorage.getItem('walletconnect')) {
            WalletConnectServices.killSession()
            showNotification('txtWarningActiveMetaMask TODO')
            // showNotification(messages.txtWarningActiveMetaMask)
          }
          ReduxService.callDispatchAction(setUserData({}))
          callbackError && callbackError()
          return resolve()
        }
      } catch (error) {
        showNotification('txtWarningActiveMetaMask TODO')
        // showNotification(messages.txtWarningActiveMetaMask)
        reject(error)
      }
    })
  }

  static async refreshUserBalance () {
    const userData = this.getUserData()
    const isSigned = ReduxService.checkIsSigned()

    const balanceResult = {
      balance: 0
    }
    if (isSigned) {
      const promiseResult = await Promise.all([
        Web3Services.getBalance(userData.address)
      ])
      balanceResult.balance = promiseResult[0] || 0
    }

    ReduxService.callDispatchAction(setBalance({ ...balanceResult }))
  }


  static checkIsSigned () {
    const { app } = store.getState()
    const { metamask, pantograph, walletConnect, userData, connectionMethod } = app
    // const { userData, metamaskRedux, pantograph, walletConnect, connectionMethod } = storeRedux.getState()
    if (userData && userData.address) {
      switch (connectionMethod) {
      case CONNECTION_METHOD.METAMASK:
        return lowerCase(metamask.address) === lowerCase(userData.address)
      case CONNECTION_METHOD.PANTOGRAPH:
        return lowerCase(pantograph.account) === lowerCase(userData.address)
      case CONNECTION_METHOD.WALLET_CONNECT:
        return lowerCase(walletConnect.address) === lowerCase(userData.address)
      default:
        return false
      }
    }
    return false
  }

}