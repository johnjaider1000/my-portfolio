import useTranslator from './useTranslator'

const useWords = () => {
  const { LANG } = useTranslator()
  return { ...LANG }
}

export default useWords
