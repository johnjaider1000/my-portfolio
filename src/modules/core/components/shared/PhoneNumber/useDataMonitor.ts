import { useEffect, useState, useContext } from "react"
import {  parsePhoneNumber } from 'libphonenumber-js'
import useWords from "@/hooks/useWords"
import { GeneralContext } from '@/store/context/GeneralContext'
import { getParts, getPrefix } from "@/utils"

interface Props {
  value?: string
}

const useDataMonitor = ({value}: Props) => {
  const {PHONE_COMPONENT: {CODE_ERROR, PHONE_ERROR}} = useWords()

  const {
    generalState: { geoip },
  } = useContext(GeneralContext)
  const [errors, setErrors] = useState<any>({})
  const {codeNumber, phone} = getParts({geoip, value})
  const [code, setCode] = useState<string>(codeNumber)
  const [phoneNumber, setPhoneNumber] = useState<string>(phone)

  useEffect(() =>  {
    setCode(getPrefix(geoip?.country))
  }, [geoip])

  useEffect(() => {
    const newErrors: any = {}

    try {
      if (phoneNumber.trim().length < 3) {
        return
      }

      if (!code) {
        newErrors['code'] = CODE_ERROR
        setErrors(newErrors)
        return
      }

      const phone = `+${code}${phoneNumber}`
      const data = parsePhoneNumber(phone)
      if (!data.isValid()) {
        newErrors['phone'] = PHONE_ERROR
        setErrors(newErrors)
        return
      }

      setErrors(newErrors)
    } catch (error) {}
  }, [CODE_ERROR, PHONE_ERROR, code, phoneNumber])

  return {code, setCode, phoneNumber, setPhoneNumber, getPrefix, errors}
}

export default useDataMonitor
