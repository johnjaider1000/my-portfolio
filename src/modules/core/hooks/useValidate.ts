import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { ObjectUtils } from '@/utils'
import objectPath from 'object-path'

// Ejemplo de esquema Yup
const schema = Yup.object().shape({
  username: Yup.string().required('El usuario es requerido'),
  company: Yup.object()
    .shape({
      label: Yup.string().required('La empresa es requerida'),
    })
    .nullable(),
})

const useValidate = (schema: any) => {
  const {
    register: registerOriginal,
    watch,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const register = (name: any) => {
    return {
      ...registerOriginal(name),
      error: ObjectUtils.has(errors, name),
      helperText: objectPath.get(errors, `${name}.message`),
    }
  }

  return { register, handleSubmit, watch, reset, control, errors }
}

export default useValidate
