import { AuthUserProps } from '@/modules/auth/interfaces/context'
import jwt from 'jsonwebtoken'
import { getProp } from '.'

export const decodeUser = (
  authToken: string = ''
): AuthUserProps | undefined => {
  const decodedToken: any = jwt.decode(authToken)

  if (!decodedToken) {
    return
  }

  return getUser(decodedToken)
}

export const getUser = (user: any) => {
  const userObject: AuthUserProps = {
    _id: getProp(user, '_id'),
    username: getProp(user, 'username'),
    firstName: getProp(user, 'firstName'),
    lastName: getProp(user, 'lastName'),
    email: getProp(user, 'email'),
    aud: getProp(user, 'aud'),
    rating: getProp(user, 'rating'),
    iat: getProp(user, 'iat'),
    status: getProp(user, 'status'),
    exp: getProp(user, 'exp'),
    sub: getProp(user, 'sub'),
    iss: getProp(user, 'iss'),
    country: getProp(user, 'country'),
  }

  return userObject
}

export const getAvatarName = (user?: UserInterface): string => {
  const firstName = getProp(user, 'firstName.0', 'I')
  return `${firstName}`.toUpperCase()
}

export const getFullName = (user?: UserInterface): string => {
  return `${getProp(user, 'firstName')} ${getProp(user, 'lastName')}`
}

export const getFirstWord = (value?: string) => {
  if (!value) {
    return
  }

  return value.split(/\s+/)[0]
}
