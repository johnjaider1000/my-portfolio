import metadata from 'libphonenumber-js/metadata.min.json'
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js'
import { get as getPropFn, del as delProp } from 'object-path'
import crypto from 'crypto'

type PathKey = string | number

export function countryToFlag(isoCode: string) {
  if (!isoCode) {
    return ''
  }
  const country =
    typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode
  return country
}

export const getPrefix = (countryCode?: string) => {
  if (!countryCode) {
    return '1'
  }

  return metadata.countries[countryCode as CountryCode]?.[0]
}

export const getParts = ({ geoip, value }: any) => {
  let codeNumber = getPrefix(geoip?.country),
    phone = ''
  try {
    if (value) {
      const parsedNumber = parsePhoneNumber(value)
      codeNumber = parsedNumber.countryCallingCode
      phone = parsedNumber.nationalNumber
    }
  } catch (error) {}

  return { codeNumber, phone }
}

export const ObjectUtils = {
  has: (obj: any, path: any) => {
    const keys = path.split('.')
    return keys.every(
      (key: any) => obj != null && obj.hasOwnProperty(key) && (obj = obj[key])
    )
  },
  remove: (obj: Record<string, any>, keysToRemove: PathKey[]) => {
    const newObj = { ...obj }
    keysToRemove.forEach((key) => {
      delProp(newObj, key)
    })
    return newObj
  },
}

export const hash = (value: string) => {
  const hash = crypto.createHash('sha256')
  hash.update(value)
  const hashedValue = hash.digest('hex')
  return hashedValue
}

export const getProp = (object: any, path: string, defaultValue?: any) => {
  if (!object) {
    return
  }

  return getPropFn(object, path, defaultValue)
}

export const getMany = (object: object | undefined, keyPaths: string[]) => {
  if (typeof object !== 'object' || Array.isArray(object)) {
    return []
  }

  const gotten = keyPaths.map((keyPath) => {
    const gottenValue = getProp(object, keyPath)
    return gottenValue
  })

  return gotten
}

export const pascalCaseToSnakeCase = (iconName: string | undefined) => {
  if (!iconName || typeof iconName !== 'string') {
    return iconName
  }

  return iconName
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Inserta guión bajo entre minúscula y mayúscula
    .toLowerCase() // Convierte todo a minúsculas
}
