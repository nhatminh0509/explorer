import { notification } from "antd"
import bigdecimal from 'bigdecimal'

export const checkHuaweiDevice = (deviceName) => {
  return ['ALP-', 'AMN-', 'ANA-', 'ANE-', 'ANG-', 'AQM-', 'ARS-', 'ART-', 'ATU-', 'BAC-', 'BLA-', 'BRQ-', 'CAG-', 'CAM-', 'CAN-', 'CAZ-', 'CDL-', 'CDY-', 'CLT-', 'CRO-', 'CUN-', 'DIG-', 'DRA-', 'DUA-', 'DUB-', 'DVC-', 'ELE-', 'ELS-', 'EML-', 'EVA-', 'EVR-', 'FIG-', 'FLA-', 'FRL-', 'GLK-', 'HMA-', 'HW-', 'HWI-', 'INE-', 'JAT-', 'JEF-', 'JER-', 'JKM-', 'JNY-', 'JSC-', 'LDN-', 'LIO-', 'LON-', 'LUA-', 'LYA-', 'LYO-', 'MAR-', 'MED-', 'MHA-', 'MLA-', 'MRD-', 'MYA-', 'NCE-', 'NEO-', 'NOH-', 'NOP-', 'OCE-', 'PAR-', 'PIC-', 'POT-', 'PPA-', 'PRA-', 'RNE-', 'SEA-', 'SLA-', 'SNE-', 'SPN-', 'STK-', 'TAH-', 'TAS-', 'TET-', 'TRT-', 'VCE-', 'VIE-', 'VKY-', 'VNS-', 'VOG-', 'VTR-', 'WAS-', 'WKG-', 'WLZ-', 'YAL'].some(format => deviceName.includes(format))
}

export const getWalletConnectHuaweiLink = (appName, subLink) => {
  if (appName.toLowerCase().includes('keyring')) {
    return 'keyring://' + subLink
  } else if (appName.toLowerCase().includes('prema')) {
    return 'premawallet://' + subLink
  } else if (appName.toLowerCase().includes('nmb48')) {
    return 'nmb48wallet://' + subLink
  }
}

export const showNotification = (title = null, description = '', type = 'open') => {
  let params = {
    placement: 'bottomRight',
    className: 'notification-class',
    bottom: 54,
    duration: 5
  }
  if (title) {
    params['message'] = title
  }
  if (description) {
    params['description'] = description
  }
  notification[type](params)
}

export const destroyNotification = () => {
  notification.destroy()
}

export const saveDataLocal = (key, data) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem(key, JSON.stringify(data))
}

export const getDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  return JSON.parse(localStorage.getItem(key))
}

export const removeDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem(key)
}

export const lowerCase = (value) => {
  return value ? value.toLowerCase() : value
}

export const upperCase = (value) => {
  return value ? value.toUpperCase() : value
}

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
}

export const convertBalanceToWei = (strValue, iDecimal = 18) => {
  var multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal))
  var convertValue = new bigdecimal.BigDecimal(String(strValue))
  return multiplyNum.multiply(convertValue).toString().split('.')[0]
}

export const convertWeiToBalance = (strValue, iDecimal = 18) => {
  var multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal))
  var convertValue = new bigdecimal.BigDecimal(String(strValue))
  return scientificToDecimal(convertValue.divide(multiplyNum).toString())
}

export const roundingNumber = (number, rounding = 7) => {
  const powNumber = Math.pow(10, parseInt(rounding))
  return Math.floor(number * powNumber) / powNumber
}

export const scientificToDecimal = (num) => {
  const sign = Math.sign(num)
  if (/\d+\.?\d*e[+-]*\d+/i.test(num)) {
    const zero = '0'
    const parts = String(num).toLowerCase().split('e')
    const e = parts.pop()
    let l = Math.abs(e)
    const direction = e / l
    const coeffArray = parts[0].split('.')

    if (direction === -1) {
      coeffArray[0] = Math.abs(coeffArray[0])
      num = zero + '.' + new Array(l).join(zero) + coeffArray.join('')
    } else {
      const dec = coeffArray[1]
      if (dec) l = l - dec.length
      num = coeffArray.join('') + new Array(l + 1).join(zero)
    }
  }

  if (sign < 0) {
    num = -num
  }

  return num
}


export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4
) => {
  return `${address.substr(0, prefixLength)}...${address.substr(
    address.length - suffixLength,
    suffixLength
  )}`
}

