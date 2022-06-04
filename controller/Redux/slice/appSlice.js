import { createSlice } from '@reduxjs/toolkit'
import { KEY_STORE } from '../../../common/constants'
import { saveDataLocal } from '../../../common/function'

const initialState = {
  metamask: {
    network: 0,
    accounts: [],
    address: ''
  },
  walletConnect: {
    connector: {},
    chainId: 0,
    accounts: [],
    address: '',
    session: {},
    appConnected: null
  },
  userBalance: {
    balance: 0
  },
  userData: null,
  connectionMethod: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMetamask: (state, action) => {
      state.metamask = action.payload
    },
    setWalletConnect: (state, action) => {
      state.walletConnect = action.payload
    },
    setBalance: (state, action) => {
      state.userBalance = action.payload
    },
    setUserData: (state, action) => {
      saveDataLocal(KEY_STORE.SET_USER, action.payload)
      state.userData = action.payload
    },
    setConnectionMethod: (state, action) => {
      saveDataLocal(KEY_STORE.SET_CONNECTION_METHOD, action.payload)
      state.connectionMethod = action.payload
    }
  },
})

export const { setWalletConnect, setBalance, setMetamask, setUserData, setConnectionMethod } = appSlice.actions

export default appSlice.reducer
