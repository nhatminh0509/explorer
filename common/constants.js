export const CHAIN_DATA = {
  56: {
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    chainId: '0x38',
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 18
    },
    blockExplorerUrls: ['https://bscscan.com']
  },
  97: {
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 18
    },
    blockExplorerUrls: ['https://testnet.bscscan.com']
  },
  24052022: {
    rpcUrls: ['https://rpc-test.w3w.app/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/rpc'],
    chainId: '0x16f0136',
    chainName: 'WrapTag',
    nativeCurrency: {
      name: 'WPT',
      symbol: 'WPT',
      decimals: 18
    },
    blockExplorerUrls: ['https://explorer-nhatminh0509.vercel.app/']
  }
}

export const OBSERVER_KEY = {
  SIGN_IN: 'SIGN_IN',
  ALREADY_SIGNED: 'ALREADY_SIGNED',
  CHANGED_ACCOUNT: 'CHANGED_ACCOUNT',
  UPDATE_MY_DOMAINS: 'UPDATE_MY_DOMAINS',
  SIGN_WALLET_CONNECT: 'SIGN_WALLET_CONNECT'
}

export const KEY_STORE = {
  SET_CONNECTION_METHOD: 'SET_CONNECTION_METHOD',
  SET_LOCALE: 'SET_LOCALE',
  SET_USER: 'SET_USER',
  SET_SETTING: 'SET_SETTING',
  SET_STAKE_TOKEN_ADDRESSES: 'SET_STAKE_TOKEN_ADDRESSES',
  SET_CURRENT_TOKEN_ADDRESS: 'SET_CURRENT_TOKEN_ADDRESS'
}

export const CONNECTION_METHOD = {
  METAMASK: 'METAMASK',
  WALLET_CONNECT: 'WALLET_CONNECT',
  PANTOGRAPH: 'PANTOGRAPH'
}

export const WALLET_CONNECT_APP = [{
  'name': 'Rainbow',
  'shortName': 'Rainbow',
  'color': '#001e59',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/2cc2f20c-840b-497a-c028-dbb481d49700/md',
  'universalLink': 'https://rnbwapp.com',
  'deepLink': 'rainbow:'
}, {
  'name': 'Trust Wallet',
  'shortName': 'Trust',
  'color': '#3375bb',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0528ee7e-16d1-4089-21e3-bbfb41933100/md',
  'universalLink': 'https://link.trustwallet.com',
  'deepLink': 'trust:'
}, {
  'name': 'Argent',
  'shortName': 'Argent',
  'color': '#ff875b',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ce5fbfe8-13b5-4f5f-184a-34f6ee7a3d00/md',
  'universalLink': 'https://argent.link/app',
  'deepLink': 'argent://app'
}, {
  'name': 'MetaMask',
  'shortName': 'MetaMask',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/fb5269f0-1870-42d6-82b4-26d27626e800/md',
  'universalLink': 'https://metamask.app.link',
  'deepLink': 'metamask:'
}, {
  'name': 'Gnosis Safe Multisig',
  'shortName': 'Gnosis Safe',
  'color': '#091828',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0b7e0f05-0a5b-4f3c-315d-59c1c4c22c00/md',
  'universalLink': 'https://gnosis-safe.io/',
  'deepLink': 'gnosissafe:'
}, {
  'name': 'Crypto.com | DeFi Wallet',
  'shortName': 'Crypto.com',
  'color': '#1199fa',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/7c5ff577-a68d-49c5-02cd-3d83637b0b00/md',
  'universalLink': 'https://wallet.crypto.com',
  'deepLink': 'cryptowallet:'
}, {
  'name': 'Pillar',
  'shortName': 'Pillar',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0eb8230d-ce4c-42fb-2a57-a84a6eb7ea00/md',
  'universalLink': '',
  'deepLink': 'pillarwallet:'
}, {
  'name': 'imToken',
  'shortName': 'imToken',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/1991f85d-43d4-4165-3502-cd6ef8312b00/md',
  'universalLink': '',
  'deepLink': 'imtokenv2:'
}, {
  'name': 'ONTO',
  'shortName': 'ONTO',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d22b2a4b-5562-49ba-506b-6d5986914600/md',
  'universalLink': 'https://onto.app',
  'deepLink': 'ontoprovider:'
}, {
  'name': 'TokenPocket',
  'shortName': 'TokenPocket',
  'color': '#2982fe',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d436aaa8-28c7-4efb-5df4-3e1af8012c00/md',
  'universalLink': '',
  'deepLink': 'tpoutside:'
}, {
  'name': 'MathWallet',
  'shortName': 'MathWallet',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/26a8f588-3231-4411-60ce-5bb6b805a700/md',
  'universalLink': 'https://www.mathwallet.org',
  'deepLink': 'mathwallet:'
}, {
  'name': 'Steakwallet',
  'shortName': 'Steakwallet',
  'color': '#FF3B9A',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/700457dc-d772-46f3-7332-8c80a3dcb800/md',
  'universalLink': 'https://links.steakwallet.fi',
  'deepLink': 'steakwallet'
}, {
  'name': 'BitPay',
  'shortName': 'BitPay',
  'color': '#1a3c8b',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/97d4429f-eaf0-4302-87f5-9d26d46fe700/md',
  'universalLink': 'https://link.bitpay.com/wallet',
  'deepLink': 'bitpay:'
}, {
  'name': 'Ledger Live',
  'shortName': 'Ledger',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e8803581-a57f-4e4f-5a1b-c642c5da1900/md',
  'universalLink': '',
  'deepLink': 'ledgerlive:'
}, {
  'name': '1inch Wallet',
  'shortName': '1inch',
  'color': '#1f242e',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dce1ee99-403f-44a9-9f94-20de30616500/md',
  'universalLink': 'https://wallet.1inch.io',
  'deepLink': '1inch:'
}, {
  'name': 'AlphaWallet',
  'shortName': 'AlphaWallet',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/1746957d-bbfd-45aa-0695-37f27b67c200/md',
  'universalLink': 'https://aw.app',
  'deepLink': 'awallet:'
}, {
  'name': 'Huobi Wallet',
  'shortName': 'Huobi',
  'color': '#2d67f8',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5a96d19c-93d3-4e6a-624a-16f52773d000/md',
  'universalLink': '',
  'deepLink': 'huobiwallet:'
}, {
  'name': 'Eidoo',
  'shortName': 'Eidoo',
  'color': '#37b39e',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ef5b8bcf-00d5-457d-e161-9911e4788700/md',
  'universalLink': 'https://eidoo.io/crypto-wallet',
  'deepLink': 'eidoo:'
}, {
  'name': 'MYKEY',
  'shortName': 'MYKEY',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/df0306ae-f33c-454f-8679-39aed351c800/md',
  'universalLink': 'https://mykey.org',
  'deepLink': 'mykeywalletconnect:'
}, {
  'name': 'Coin98',
  'shortName': 'Coin98',
  'color': '#272727',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dee547be-936a-4c92-9e3f-7a2350a62e00/md',
  'universalLink': 'https://coin98.com',
  'deepLink': 'coin98:'
}, {
  'name': 'CoolWallet',
  'shortName': 'CoolWallet',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e97c4a6d-cd91-4331-ac98-196141df5300/md',
  'universalLink': null,
  'deepLink': 'coolwallet:'
}, {
  'name': "D'CENT Wallet",
  'shortName': "D'CENT",
  'color': '#fff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/1efb49ec-2bab-4fa1-f2f2-4392c64ed000/md',
  'universalLink': 'https://link.dcentwallet.com',
  'deepLink': 'dcent:'
}, {
  'name': 'ZelCore',
  'shortName': 'ZelCore',
  'color': '#232220',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/97d45a92-a1f0-46da-95a6-ad5db99f3500/md',
  'universalLink': 'https://link.zel.network',
  'deepLink': 'zel:'
}, {
  'name': 'Nash',
  'shortName': 'Nash',
  'color': '#0052f3',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/12f981b1-bb0a-4115-009f-317255979600/md',
  'universalLink': 'https://nash.io/walletconnect',
  'deepLink': 'nash:'
}, {
  'name': 'Coinomi',
  'shortName': 'Coinomi',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3b446d16-a908-40c8-5835-9a6efe90dd00/md',
  'universalLink': 'https://coinomi.page.link',
  'deepLink': 'coinomi:'
}, {
  'name': 'CYBAVO Wallet',
  'shortName': 'CYBAVO',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3117d3ce-b973-4cfd-8fb5-f5d72ed3c200/md',
  'universalLink': 'https://cdn.cybavo.com',
  'deepLink': 'cybavowallet:'
}, {
  'name': 'SafePal',
  'shortName': 'SafePal',
  'color': '#0080ff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/7c4f63f5-3cf6-4043-3c71-139e6f245000/md',
  'universalLink': 'https://link.safepal.io',
  'deepLink': 'safepalwallet:'
}, {
  'name': 'EasyPocket',
  'shortName': 'EasyPocket',
  'color': '#115bfb',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/a9fcf1d1-3b2c-4226-0fb9-a6c8f2647300/md',
  'universalLink': 'https://wallet.easypocket.app',
  'deepLink': 'easypocket:'
}, {
  'name': 'Bridge Wallet',
  'shortName': 'Bridge',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/989d504f-93db-4ca6-c00a-9d1faf177d00/md',
  'universalLink': 'https://bridge.mtpelerin.com',
  'deepLink': 'bridgewallet:'
}, {
  'name': 'SparkPoint',
  'shortName': 'SparkPoint',
  'color': '#14435f',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/34c4f901-70de-4507-e7a0-bc7887843000/md',
  'universalLink': 'https://sparkpoint.io',
  'deepLink': 'sparkpoint:'
}, {
  'name': 'BitKeep',
  'shortName': 'BitKeep',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0b32f06b-bce3-46a7-d445-0e77dc2ad800/md',
  'universalLink': '',
  'deepLink': 'bitkeep:'
}, {
  'name': 'PEAKDEFI Wallet',
  'shortName': 'PEAKDEFI',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/744a3fbe-4261-4148-133e-49c5b58cb400/md',
  'universalLink': 'https://peakdefi.com/download',
  'deepLink': 'peakdefiwallet:'
}, {
  'name': 'Unstoppable Wallet',
  'shortName': 'Unstoppable',
  'color': '#FFBE43',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5c38b22c-adb9-4899-3252-6e3d71458500/md',
  'universalLink': 'https://unstoppable.money',
  'deepLink': 'moneyunstoppable:'
}, {
  'name': 'HaloDeFi Wallet',
  'shortName': 'HaloDeFi',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/af664892-49ef-4045-642e-347a4e98ee00/md',
  'universalLink': '',
  'deepLink': 'halodefiwallet:'
}, {
  'name': 'Ellipal',
  'shortName': 'Ellipal',
  'color': '#307cf9',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0a805e10-bfc0-4d02-d9c1-8cec88f0dc00/md',
  'universalLink': 'https://www.ellipal.com/',
  'deepLink': 'ellipal:'
}, {
  'name': 'KEYRING PRO',
  'shortName': 'KEYRINGPRO',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/fc9e44eb-661d-4ee1-a7df-27caaf0c8700/md',
  'universalLink': 'https://keyring.app',
  'deepLink': 'keyring:'
}, {
  'name': 'Aktionariat',
  'shortName': 'Aktionariat',
  'color': '#000000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/6d18e8ea-b536-4038-c5bf-94a499d5a400/md',
  'universalLink': 'https://app.aktionariat.com',
  'deepLink': 'aktionariat:'
}, {
  'name': 'Talken Wallet',
  'shortName': 'Talken',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/1afb5a3a-2da3-40ce-baf9-b416e7510600/md',
  'universalLink': 'https://talken.io',
  'deepLink': 'talken-wallet:'
}, {
  'name': 'Flare Wallet',
  'shortName': 'Flare',
  'color': '#1f243b',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/dfd3a3d8-d386-4c47-ff26-5c24845d2e00/md',
  'universalLink': 'https://flarewallet.io',
  'deepLink': 'flare:'
}, {
  'name': 'KyberSwap',
  'shortName': 'KyberSwap',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3abd1720-260e-495a-2e31-3d0b349e0d00/md',
  'universalLink': 'https://kyberswapnew.app.link',
  'deepLink': 'kyberswap:'
}, {
  'name': 'AToken Wallet',
  'shortName': 'AToken',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d93fb51d-f2b1-4b4e-f741-7485461bd500/md',
  'universalLink': 'https://www.atoken.com',
  'deepLink': 'atoken:'
}, {
  'name': 'Tongue Wallet',
  'shortName': 'Tongue',
  'color': '#ff3178',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/20bc4fdb-b9e6-429a-8cba-c233b3273000/md',
  'universalLink': 'https://www.tongue.fi',
  'deepLink': 'tongue:'
}, {
  'name': 'RWallet',
  'shortName': 'RWallet',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/a883229c-26cb-4c19-9b34-1f0ed4012a00/md',
  'universalLink': 'https://www.rwallet.app',
  'deepLink': 'rwallet:'
}, {
  'name': 'PlasmaPay',
  'shortName': 'PlasmaPay',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/466c8fd0-fcec-4621-b94f-e91ce1439f00/md',
  'universalLink': 'https://plasmapay.com/',
  'deepLink': 'plasmapay:'
}, {
  'name': 'O3Wallet',
  'shortName': 'O3Wallet',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e1c7c6af-c731-463e-55f0-5e686e9f6200/md',
  'universalLink': 'https://o3.network',
  'deepLink': 'o3wallet:'
}, {
  'name': 'HashKey Me',
  'shortName': 'HashKey Me',
  'color': '#fe8f3f',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/72734fac-9500-4c2c-81ba-678f7fc32700/md',
  'universalLink': 'https://me.hashkey.com',
  'deepLink': 'hashme:'
}, {
  'name': 'Defiant',
  'shortName': 'Defiant',
  'color': '#274A60',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/026462e7-09a3-47f6-6b46-49df18133b00/md',
  'universalLink': 'https://defiantapp.tech',
  'deepLink': 'defiantapp:'
}, {
  'name': 'Valora',
  'shortName': 'Valora',
  'color': '#42D689',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/a03bfa44-ce98-4883-9b2a-75e2b68f5700/md',
  'universalLink': 'https://valoraapp.com',
  'deepLink': 'celo:'
}, {
  'name': 'Celo Wallet',
  'shortName': 'Celo Wallet',
  'color': '#35D07F',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/482c9981-61c0-4782-84ec-c80fd997da00/md',
  'universalLink': '',
  'deepLink': 'celowallet:'
}, {
  'name': 'Elastos Essentials',
  'shortName': 'Essentials',
  'color': '#000000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/04a6bfed-d80e-4f7b-0516-261f86aa4000/md',
  'universalLink': 'https://essentials.elastos.net',
  'deepLink': 'essentials:'
}, {
  'name': 'fuse.cash',
  'shortName': 'fuse.cash',
  'color': '#37D888',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/71828267-72d6-4680-e144-265e6dc1e400/md',
  'universalLink': 'https://app.fuse.cash/',
  'deepLink': 'fuse.cash:'
}, {
  'name': 'Stasis',
  'shortName': 'Stasis',
  'color': '#2468E4',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/7ae753bc-a754-450c-2d90-2c5521734400/md',
  'universalLink': 'https://app.stasis.net',
  'deepLink': 'stasis:'
}, {
  'name': 'JulWallet',
  'shortName': 'JulWallet',
  'color': '#c84ce4',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/cabd50de-22fa-487b-ce68-2c63de8bb800/md',
  'universalLink': 'https://justliquidity.org',
  'deepLink': 'julwallet:'
}, {
  'name': 'Bitpie',
  'shortName': 'Bitpie',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/f9b7c668-ed26-47f7-d8c9-7eadc7114800/md',
  'universalLink': '',
  'deepLink': 'bitpie:'
}, {
  'name': 'ArchiPage',
  'shortName': 'ArchiPage',
  'color': '#000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/b62c4f22-e781-4ca9-5c01-ef7cd9d23400/md',
  'universalLink': '',
  'deepLink': 'archipage:'
}, {
  'name': 'Tangem',
  'shortName': 'Tangem',
  'color': '#FFF',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/8a5b6e94-e378-458d-bf2e-017cc7958e00/md',
  'universalLink': 'https://app.tangem.com',
  'deepLink': 'tangem:'
}, {
  'name': 'yiToken',
  'shortName': 'yiToken',
  'color': '#2c4cfc',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/b5cc13d4-2a58-4142-08dd-5596ab253800/md',
  'universalLink': '',
  'deepLink': 'yitoken:'
}, {
  'name': 'DID Wallet',
  'shortName': 'DID',
  'color': '#4598FA',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/673b7f3b-a555-4327-f9b7-fefa535bc500/md',
  'universalLink': '',
  'deepLink': 'abt:'
}, {
  'name': 'GD Wallet',
  'shortName': 'GD Wallet',
  'color': '#000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/5363dc86-3de9-4197-c6ed-e8167b673a00/md',
  'universalLink': '',
  'deepLink': 'GDWalletWC:'
}, {
  'name': 'Binana',
  'shortName': 'Binana',
  'color': '#000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/65a60845-8fe3-4146-2688-586e4dc68a00/md',
  'universalLink': 'https://master.tokenone.app',
  'deepLink': ''
}, {
  'name': 'AirGap',
  'shortName': 'AirGap',
  'color': '#50249f',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/cc530d2d-4d01-4f9f-cf38-14deb71fd600/md',
  'universalLink': '',
  'deepLink': 'airgap-wallet:'
}, {
  'name': 'SecuX',
  'shortName': 'SecuX',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/6013a9a1-4a67-45bb-fc24-27c11eb13900/md',
  'universalLink': 'https://wallet.secuxtech.com',
  'deepLink': 'secux://'
}, {
  'name': 'Orange',
  'shortName': 'Orange',
  'color': '#EB5B56',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/7fcbf9f0-0c0b-439d-3fdb-31b32c28df00/md',
  'universalLink': 'https://link.orangewallet.app',
  'deepLink': 'orangewallet:'
}, {
  'name': 'Avacus',
  'shortName': 'Avacus',
  'color': '#f7a026',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/e90bf788-03e3-48eb-e892-adfae0a61500/md',
  'universalLink': 'https://avacus.app.link',
  'deepLink': 'avacus:'
}, {
  'name': 'Krystal',
  'shortName': 'Krystal',
  'color': '#1de9b6',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/91449cb2-57b0-4bb6-481b-47d489f7a800/md',
  'universalLink': '',
  'deepLink': 'krystalWallet:'
}, {
  'name': 'Linen',
  'shortName': 'Linen',
  'color': '#009fbe',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/91458f54-aabe-44cf-4788-159ccc733600/md',
  'universalLink': 'https://linen.app/',
  'deepLink': ''
}, {
  'name': 'Ambire Wallet',
  'shortName': 'Ambire',
  'color': '#aa6aff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/c39b3a16-1a38-4588-f089-cb7aeb584700/md',
  'universalLink': 'https://mobile.ambire.com',
  'deepLink': 'ambire:'
}, {
  'name': 'CoinStats',
  'shortName': 'CoinStats',
  'color': '#000000',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/f989ab84-650b-4ad5-c342-77f3334f1b00/md',
  'universalLink': 'https://coinstats.app/walletconnect/',
  'deepLink': 'coinstats:'
}, {
  'name': 'Coingrig',
  'shortName': 'Coingrig',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/18e38e41-a387-4402-ca31-6d2d5eb91100/md',
  'universalLink': 'https://link.coingrig.com',
  'deepLink': 'coingrig://'
}, {
  'name': 'Snowball',
  'shortName': 'Snowball',
  'color': '#292E39',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/313faea4-af8c-41f4-0ed8-98be5d048e00/md',
  'universalLink': 'https://app.snowball.exchange/app',
  'deepLink': null
}, {
  'name': 'Exodus',
  'shortName': 'Exodus',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ed5c9bd5-f7d8-43ef-393f-75ef3f877c00/md',
  'universalLink': 'https://exodus.com/wc',
  'deepLink': 'wc:'
}, {
  'name': 'SafeMoon',
  'shortName': 'SafeMoon',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ecc31a8e-0ee9-49db-cc59-0876b7c35600/md',
  'universalLink': 'https://safemoon.net/',
  'deepLink': 'safemoon:'
}, {
  'name': 'TK Finance',
  'shortName': 'TK Finance',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/c4066f68-2247-49bf-ac8a-a677bfa81800/md',
  'universalLink': 'https://trustkeys.finance',
  'deepLink': 'tk://'
}, {
  'name': 'Bitski',
  'shortName': 'Bitski',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/94d94cb5-a94f-47cf-70e6-fe8d3f1c3700/md',
  'universalLink': 'https://wallet.bitski.com/walletconnect',
  'deepLink': ''
}, {
  'name': 'FILWallet',
  'shortName': 'FILWallet',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/f400f6c2-ca6c-487b-654d-e119af247500/md',
  'universalLink': 'https://h5.filwallet.co',
  'deepLink': null
}, {
  'name': 'Spot',
  'shortName': 'Spot',
  'color': '#29C0FF',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/7d90b813-c44e-41c2-a105-d20b26c71000/md',
  'universalLink': 'https://spot.so/',
  'deepLink': 'spot:'
}, {
  'name': 'Frontier',
  'shortName': 'Frontier',
  'color': '#CC703C',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/a78c4d48-32c1-4a9d-52f2-ec7ee08ce200/md',
  'universalLink': null,
  'deepLink': 'frontier://'
}, {
  'name': 'ZenGo',
  'shortName': 'ZenGo',
  'color': '#35C4BA',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d1794d97-ea1f-4966-be42-9f614bb5d800/md',
  'universalLink': 'https://app.zengo.com/connect-scanner',
  'deepLink': 'zengo://app.zengo.com/connect-scanner '
}, {
  'name': 'PLTwallet',
  'shortName': 'PLTwallet',
  'color': '#ffffff',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/a5d9dd15-8cef-42de-8bed-09e01a8b0200/md',
  'universalLink': 'https://hashport.io/',
  'deepLink': 'pltwallet:'
}, {
  'name': 'Vision: Crypto Wallet',
  'shortName': 'Vision',
  'color': '#0b121c',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/64ccf07c-1fba-4473-49e8-dc446e5a5000/md',
  'universalLink': 'https://vision-crypto.com',
  'deepLink': null
}, {
  'name': 'Monarch Wallet',
  'shortName': 'Monarch',
  'color': '#F9A900',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/c664d955-8a1e-4460-3917-4cfcf198f000/md',
  'universalLink': 'https://monarchwallet.com',
  'deepLink': null
}, {
  'name': 'BeeWallet',
  'shortName': 'BeeWallet',
  'color': '#ffc04d',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/ae53ba0b-4d01-42f6-53d8-cc568409b700/md',
  'universalLink': 'https://main.apple.bee9527.com',
  'deepLink': null
}, {
  'name': 'LOBSTR Wallet',
  'shortName': 'LOBSTR',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/0dafcaab-0852-47f7-85dd-436b86491d00/md',
  'universalLink': 'https://lobstr.co/uni/wc',
  'deepLink': 'lobstr://wc'
}, {
  'name': 'CoinCircle',
  'shortName': 'CoinCircle',
  'color': '#2499c4',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/eae63a23-c7ba-4f7e-24b3-e6fc69215d00/md',
  'universalLink': 'https://coincircle.com/app/walletconnect',
  'deepLink': ''
}, {
  'name': 'Klever Wallet',
  'shortName': 'Klever',
  'color': '#DC3F89',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/8f5bbad8-6a14-4b2c-5343-cc1fca6e4d00/md',
  'universalLink': 'https://klever.page.link',
  'deepLink': 'kleverwallet:'
}, {
  'name': 'Lead Wallet',
  'shortName': 'Lead',
  'color': '#F90A88',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d0407e64-9afa-4c1a-3290-3b925ad8b200/md',
  'universalLink': 'https://play.google.com/store/apps/details?id=com.leadWallet',
  'deepLink': 'leadwallet://wallet-connect/'
}, {
  'name': 'Edge Wallet',
  'shortName': 'Edge',
  'color': '#66EDA8',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/f601bc29-4298-422f-dbf7-34dac2884f00/md',
  'universalLink': 'https://deep.edge.app/wc',
  'deepLink': 'edge://wc'
}, {
  'name': 'KryptoGO Wallet',
  'shortName': 'KryptoGO',
  'color': '#FFC211',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/3ccbd966-97e8-45a0-1ceb-6141a8978e00/md',
  'universalLink': 'https://kryptogo.page.link',
  'deepLink': 'https://kryptogo.page.link'
}, {
  'name': 'Autonomy',
  'shortName': 'Autonomy',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/672e9061-e0c9-45ec-5d9c-9fd10e83e800/md',
  'universalLink': 'https://au.bitmark.com/apps/wc',
  'deepLink': 'autonomy-wc'
}, {
  'name': 'Ancrypto Wallet',
  'shortName': 'Ancrypto Wallet',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/d4382329-e288-4d7a-0ac8-3eb0facfb900/md',
  'universalLink': null,
  'deepLink': 'ancrypto://app'
}, {
  'name': 'NeftiWallet',
  'shortName': 'NeftiWallet',
  'color': '#37747E',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/1f812dec-be3d-446c-52f7-a79eb0dd5400/md',
  'universalLink': 'https://nefti.id/asset/',
  'deepLink': 'nefti://nefti.id/asset/'
}, {
  'name': 'GoldBit',
  'shortName': 'GoldBit',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/11974ef1-21ab-4806-a2b1-362c31499900/md',
  'universalLink': '',
  'deepLink': 'goldbit://'
}, {
  'name': 'S-ONE Wallet',
  'shortName': 'S-ONE Wallet',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/649bdb8c-76fc-4e13-58f4-66efe0897400/md',
  'universalLink': 'https://sonewallet.app',
  'deepLink': 'sone://'
}, {
  'name': 'Boo!',
  'shortName': 'Boo!',
  'color': '#1d629b',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/310e86aa-6ed2-4d36-2af3-c72eb1771e00/md',
  'universalLink': 'https://boo.bumoon.io',
  'deepLink': null
}, {
  'name': 'CeloDance',
  'shortName': 'CeloDance',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/47c8ab7b-a66c-4949-f0fe-b0c2c169ee00/md',
  'universalLink': null,
  'deepLink': 'celo://wallet/dappkit/celodance'
}, {
  'name': 'Uvtoken',
  'shortName': 'Uvtoken',
  'color': 'rgb(255, 255, 255)',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/52b9a9fc-caff-469e-033b-6d6f14e41800/md',
  'universalLink': null,
  'deepLink': 'UvToken://'
}, {
  'name': 'WATT ME',
  'shortName': 'WATT ME',
  'color': '#F5EB51',
  'logo': 'https://imagedelivery.net/_aTEfDRm7z3tKgu9JhfeKA/38c619c4-5365-4de5-09b2-cdde8caf3600/md',
  'universalLink': null,
  'deepLink': 'wattwallet://wallet-connect/'
}]

export const CHAIN_ID = 97
export const NATIVE_COIN = 'WPT'
