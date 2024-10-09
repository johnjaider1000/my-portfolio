import useTranslator from './useTranslator'

const useWords = () => {
  const { LANG, lang } = useTranslator()
  return { ...LANG, lang }
}

export default useWords
