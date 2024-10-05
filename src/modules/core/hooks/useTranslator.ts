import EN_LANG from '@/locale/en'
import ES_LANG from '@/locale/es'
import { useContext } from 'react'
import { GeneralContext } from '@/core/store/context/GeneralContext'

const useTranslator = () => {
  const { lang } = useContext(GeneralContext)
  if (!lang) {
    throw new Error('useWords debe ser usado dentro de un WordsProvider')
  }
  const LANG = lang === 'en' ? EN_LANG : ES_LANG
  return { LANG, lang }
}

export default useTranslator
