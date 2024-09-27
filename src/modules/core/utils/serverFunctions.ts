import { SESSION_TOKEN } from '@/modules/auth/constants/cookies'
import { getCookie } from './cookie'
import { get as getProp } from 'object-path'

interface CheckCurrentSessionProps {
  targetPath?: string
  pathMatching?: 'exact' | 'partial'
  destination?: string
  conditionType?: 'positive' | 'negative'
}

export const checkSessionAndRedirect =
  ({
    targetPath,
    pathMatching,
    destination = '/',
    conditionType = 'positive',
  }: CheckCurrentSessionProps) =>
  (ctx: any) => {
    const session = getCookie(SESSION_TOKEN, ctx)
    const pathname = getProp(ctx, 'resolvedUrl') || getProp(ctx, 'asPath')
    let shouldRedirect = false

    shouldRedirect =
      (session && conditionType === 'positive') ||
      (!session && conditionType === 'negative')

    if (targetPath && pathMatching === 'exact') {
      shouldRedirect = shouldRedirect && targetPath === pathname
    } else if (targetPath && pathMatching === 'partial') {
      shouldRedirect = shouldRedirect && pathname.includes(targetPath)
    }

    if (shouldRedirect) {
      return {
        redirect: {
          destination,
          permanent: false,
        },
      }
    }

    return { props: {} }
  }
