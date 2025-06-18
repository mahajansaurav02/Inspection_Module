// import CryptoJS from "crypto-js";
const CryptoJS = require('crypto-js')

// var secretkey = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
// var ivdata = 'C3dL6YnHWwRPS1Jy'

const key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
const iv = 'C3dL6YnHWwRPS1Jy'

const key_192 = CryptoJS.enc.Utf8.parse(fillKey(key, 256))
console.log('192 bits key: ', fillKey(key, 256))

const options = {
  iv: CryptoJS.enc.Utf8.parse(iv),
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7,
}

function fillKey(key, keySize = 256) {
  const targetLength = keySize / 8
  return key.padEnd(targetLength, 0)
}

const Encrypt = (word) => {
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key_192, options)

  return encrypted.ciphertext.toString().toUpperCase()
}

const Decrypt = (word) => {
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word)
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)

  const decrypt = CryptoJS.AES.decrypt(srcs, key_192, options)
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)

  return decryptedStr.toString()
}

export { Encrypt, Decrypt }
