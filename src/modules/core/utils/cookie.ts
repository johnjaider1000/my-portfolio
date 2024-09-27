import { get as getProp } from 'object-path'

import {
  parseCookies,
  setCookie as setCookieFn,
  destroyCookie as destroyCookieFn,
} from 'nookies'

interface CookieProps {
  name: string
  value: string
  ctx?: any
}

const AGE = 30 * 86400 //30 days

const getOptions = (age = null) => {
  return {
    maxAge: age ? age : AGE,
    path: '/',
  }
}

export const setCookie = ({ name, value, ctx = null }: CookieProps) => {
  setCookieFn(ctx, name, value, getOptions())
}

export const getCookie = (name: string, ctx: any) => {
  const cookies = parseCookies(ctx)
  return getProp(cookies, name, null)
}

export const destroyCookie = (name: string, ctx: any) => {
  destroyCookieFn(ctx, name, getOptions())
}
