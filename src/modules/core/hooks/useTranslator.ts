import EN_LANG from '@/locale/en'
import ES_LANG from '@/locale/es'
import { useContext } from 'react'
import { GeneralContext } from '@/core/store/context/GeneralContext'

const useTranslator = () => {
  const { lang } = useContext(GeneralContext)
  const LANG = lang === 'en' ? EN_LANG : ES_LANG
  return { LANG, lang }
}

export default useTranslator
