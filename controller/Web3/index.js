import Web3 from 'web3'
import { CHAIN_DATA, CHAIN_ID, CONNECTION_METHOD } from '../../common/constants'
import { convertWeiToBalance, randomNumber, roundingNumber } from '../../common/function'
import ReduxService from '../Redux/redux'
import converter from 'hex2dec'

export default class Web3Services {
  static createWeb3Provider () {
    let web3 = new Web3()
    let walletConnect = ReduxService.getWalletConnect()
    const connectionMethod = ReduxService.getConnectionMethod()
    if (connectionMethod === CONNECTION_METHOD.PANTOGRAPH && window.tomoWeb3) {
      web3.setProvider(window.tomoWeb3.currentProvider)
    } else if (connectionMethod === CONNECTION_METHOD.METAMASK && window.ethereum) {
      web3.setProvider(window.ethereum)
    } else if (connectionMethod === CONNECTION_METHOD.WALLET_CONNECT && walletConnect && walletConnect.chainId !== 0) {
      web3.setProvider(new Web3.providers.HttpProvider(CHAIN_DATA?.[walletConnect.chainId]?.rpcUrls[randomNumber(0, CHAIN_DATA?.[walletConnect.chainId]?.rpcUrls?.length)]))
    } else {
      web3.setProvider(new Web3.providers.HttpProvider(CHAIN_DATA?.[CHAIN_ID]?.rpcUrls[randomNumber(0, CHAIN_DATA?.[parseInt(CHAIN_ID)]?.rpcUrls?.length)]))
    }
    return web3
  }

  static createWeb3ProviderHTTP () {
    let web3 = new Web3(new Web3.providers.HttpProvider('https://95.179.192.46:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/rpc'))
    return web3
  }

  static createWeb3ProviderSocket () {
    let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://107.191.42.165:9652/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/ws'))
    return web3
  }

  static async onSignMessage (address, nonce) {
    return new Promise((resolve, reject) => {
      try {
        let currentWeb3 = this.createWeb3Provider()
        currentWeb3.eth.personal.sign(
          currentWeb3.utils.fromUtf8(nonce),
          address,
          (err, signature) => {
            if (err) return reject(err)
            return resolve({ address, signature })
          }
        )
      } catch (e) {
        console.log('Sign message error', e)
        return resolve()
      }
    })
  }

  static async getNetwork () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getChainId()
        .then((network) => {
          resolve(network)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static async enableMetaMask () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.currentProvider.enable()
        .then((accounts) => {
          resolve(accounts)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static async getAccounts () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getAccounts()
        .then((accounts) => {
          resolve(accounts)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static callGetDataWeb3 (contract, method, param) {
    // method.encodeABI
    const dataTx = contract.methods[method](...param).encodeABI()
    return dataTx
  }

  static async estimateGas (rawTransaction) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.estimateGas(rawTransaction, (err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }

  static async getBalance (address) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getBalance(address, (err, balance) => {
        if (err) {
          resolve(0)
        }
        resolve(balance ? convertWeiToBalance(balance) : 0)
      })
    })
  }

  static async getTokenBalance (address, contractAddress, decimalToken = 18) {
    return new Promise(async (resolve, reject) => {
      try {
        const minABI = [
          {
            constant: true,
            inputs: [
              {
                name: 'owner',
                type: 'address'
              }
            ],
            name: 'balanceOf',
            outputs: [
              {
                name: '',
                type: 'uint256'
              }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
          }
        ]
        let web3 = this.createWeb3Provider()
        const contract = new web3.eth.Contract(minABI, contractAddress)
        contract.methods.balanceOf(address).call((err, balance) => {
          if (err) {
            resolve(0)
          }
          const tokenBalance = convertWeiToBalance(balance, decimalToken)
          resolve(tokenBalance)
        })
      } catch (err) {
        resolve(0)
      }
    })
  }

  static async getTokenSymbol (contractAddress) {
    return new Promise(async (resolve, reject) => {
      try {
        const minABI = [
          {
            constant: true,
            inputs: [],
            name: '_symbol',
            outputs: [
              {
                name: '',
                type: 'string'
              }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
          }
        ]
        let web3 = this.createWeb3Provider()
        const contract = new web3.eth.Contract(minABI, contractAddress)
        contract.methods._symbol().call((err, result) => {
          if (err) {
            resolve(0)
          }
          resolve(result)
        })
      } catch (err) {
        resolve(0)
      }
    })
  }

  static async getNonce (address) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getTransactionCount(address, (err, res) => {
        if (err) {
          resolve(0)
        }
        resolve(res)
      })
    })
  }

  static async getGasPrice () {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getGasPrice((err, res) => {
        if (err) {
          resolve(0)
        }
        resolve(res)
      })
    })
  }

  static checkApprovedForAll (ownerAddress, nftAddress, contractApproveForSend) {
    return new Promise(async (resolve, reject) => {
      const abiApproveAll = [
        {
          constant: true,
          inputs: [
            {
              name: 'owner',
              type: 'address'
            },
            {
              name: 'operator',
              type: 'address'
            }
          ],
          name: 'isApprovedForAll',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        }
      ]
      let web3 = this.createWeb3Provider()
      const contractTokenApprove = new web3.eth.Contract(
        abiApproveAll,
        nftAddress
      )
      contractTokenApprove.methods
        .isApprovedForAll(ownerAddress, contractApproveForSend)
        .call((err, res) => {
          if (err) {
            resolve(false)
          }
          resolve(res)
        })
    })
  }

  static async getApproved (gameAddress, tokenId) {
    return new Promise(async (resolve, reject) => {
      const abiApprove = [
        {
          constant: true,
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256'
            }
          ],
          name: 'getApproved',
          outputs: [
            {
              name: '',
              type: 'address'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        }
      ]
      let web3 = this.createWeb3Provider()
      const contract = new web3.eth.Contract(abiApprove, gameAddress)
      contract.methods.getApproved(tokenId).call((err, result) => {
        if (err) {
          resolve(0)
        }
        resolve(result)
      })
    })
  }

  static async checkAllowance (coinContract, owner, spender) {
    return new Promise(async (resolve, reject) => {
      try {
        const minABI = [
          {
            constant: true,
            inputs: [
              {
                name: 'owner',
                type: 'address'
              },
              {
                name: 'spender',
                type: 'address'
              }
            ],
            name: 'allowance',
            outputs: [
              {
                name: '',
                type: 'uint256'
              }
            ],
            payable: false,
            stateMutability: 'view',
            type: 'function'
          }
        ]
        let web3 = this.createWeb3Provider()
        const contract = new web3.eth.Contract(minABI, coinContract)
        contract.methods.allowance(owner, spender).call((err, balance) => {
          if (err) {
            resolve(0)
          }
          resolve(balance)
        })
      } catch (err) {
        resolve(0)
      }
    })
  }

  static async trackingTxs (hash, callback, receipt) {
    if (
      receipt === undefined ||
      receipt === null ||
      receipt.blockNumber === null ||
      receipt.blockNumber === undefined
    ) {
      // let web3 = new Web3()
      // web3.setProvider(new Web3.providers.HttpProvider(CHAIN_DATA[parseInt(CHAIN_ID)].rpcUrls[randomNumber(0, CHAIN_DATA[parseInt(CHAIN_ID)].rpcUrls.length)]))
      let web3 = this.createWeb3ProviderHTTP()
      web3.eth.getTransactionReceipt(hash, (err, result) => {
        if (!err) {
          setTimeout(() => {
            this.trackingTxs(hash, callback, result)
          }, 500)
        }
      })
    } else {
      callback && callback(receipt)
    }
  }

  static async postBaseSendTxs (from, arrSend, isNeedCovert = false) {
    return new Promise(async (resolve, reject) => {
      let web3 = this.createWeb3Provider()
      web3.eth.getChainId(async (err, network) => {
        let chainId = '0x1'
        if (!err) {
          chainId = '0x' + network
        }

        const isTestnet = chainId === '0x4'
        const nonce = await this.getNonce(from)

        const promise = arrSend.map(async (item, index) => {
          return new Promise(async (resolve, reject) => {
            const {
              to,
              data,
              value,
              percent,
              gasPrice,
              extraRateGas = 1.1,
              callbackData,
              callbackFunc,
              callBeforeFunc,
              isCallBackErr,
              callbackErrFunc,
              additionalData
            } = item
            const newGasPrice = parseFloat(gasPrice ? convertBalanceToWei(gasPrice, 9) : await this.getGasPrice())
            let rawTransaction = {
              nonce: nonce + index,
              to,
              from,
              gasPrice: newGasPrice || 250000000,
              data
            }

            if (!isTestnet) {
              rawTransaction.chainId = chainId
            }

            if (percent) {
              rawTransaction.gasPrice = newGasPrice * percent
            }

            if (value) {
              rawTransaction.value = converter.decToHex(
                isNeedCovert ? convertBalanceToWei(value) : value
              )
            }
            console.log('rawTransaction: ', rawTransaction)

            this.estimateGas(rawTransaction)
              .then(async (gas) => {
                const gasFinal = converter.decToHex(roundingNumber(gas * extraRateGas, 0).toString()) || gas
                rawTransaction.gas = gasFinal
                rawTransaction.gasLimit = gasFinal
                const connectionMethod = ReduxService.getConnectionMethod()
                if (connectionMethod === CONNECTION_METHOD.WALLET_CONNECT) {
                  if (additionalData) {
                    rawTransaction.data = '--' + JSON.stringify(additionalData) + '--' + rawTransaction.data
                  }
                  WalletConnectServices.sendTransaction(rawTransaction)
                    .then((res) => {
                      // call before call next callBackData
                      if (callBeforeFunc && res) {
                        callBeforeFunc && callBeforeFunc(res)
                      }

                      if (callbackData) {
                        const callbackAfterDone = (receipt) => {
                          if (receipt && receipt.status && receipt.status === true) {
                            setTimeout(() => {
                              this.postBaseSendTxs(from, callbackData)
                            }, 500)
                          } else {
                            if (isCallBackErr) {
                              callbackErrFunc(err)
                            }
                            reject(err)
                          }
                        }
                        this.trackingTxs(res, callbackAfterDone)
                      }

                      if (callbackFunc) {
                        const callbackAfterDone = (receipt) => {
                          if (receipt && receipt.status && receipt.status === true) {
                            callbackFunc && callbackFunc(res)
                          } else {
                            if (isCallBackErr) {
                              callbackErrFunc(err)
                            }
                            reject(err)
                          }
                        }

                        this.trackingTxs(res, callbackAfterDone)
                      }
                      resolve(res)
                    })
                    .catch((err) => {
                      if (isCallBackErr) {
                        callbackErrFunc(err)
                      }
                      reject(err)
                    })
                } else {
                  // using the event emitter
                  web3.eth.sendTransaction(rawTransaction)
                    .on('transactionHash', function (hash) {
                      // call before call next callBackData
                      if (callBeforeFunc && hash) {
                        callBeforeFunc && callBeforeFunc(hash)
                      }
                      resolve(hash)
                    })
                    .on('receipt', function (receipt) {
                      if (callbackData) {
                        setTimeout(() => {
                          Web3Services.postBaseSendTxs(from, callbackData)
                        }, 500)
                      }

                      if (callbackFunc) {
                        callbackFunc(receipt.transactionHash)
                      }
                    })
                    .on('error', function (error) {
                      console.error()
                      if (isCallBackErr) {
                        callbackErrFunc(error)
                      }
                      reject(error)
                    })
                }
              })
              .catch((err) => {
                console.log(`estimateGas - error`)
                if (isCallBackErr) {
                  callbackErrFunc(err)
                }
                reject(err)
              })
          })
        })
        Promise.all(promise)
          .then((result) => {
            console.log('postBaseSendTxs - Final send result', result)
            resolve(result)
          })
          .catch((err) => {
            console.log('postBaseSendTxs - error: ', err)
            reject(err)
          })
      })
    })
  }

}