import { useRouter } from 'next/router'

const useRouterPath = () => {
  const router = useRouter()
  const currentPath = router.pathname

  const comparePath = (path?: string): boolean => {
    if (!path) {
      return false
    }

    let urlpath = currentPath

    if (urlpath.search('[category]') >= 0) {
      const { category = '' } = router.query
      urlpath = urlpath.replace('[category]', `${category}`)
    }

    return urlpath === path
  }

  return { currentPath, comparePath }
}

export default useRouterPath
