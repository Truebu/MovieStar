import validator from 'validator';
import { toast } from '../features/swalMixings';

export const handleFormRegister = (name, email, password, passwordConfirm) => {
  if (name.trim().length === 0) {
    return 'El nombre es requerido'
  } else if (email.trim().length === 0) {
    return 'Registra un Email'
  } else if (!validator.isEmail( email )) {
    return 'Tu Email es invalido'
  } else if(password.trim().length === 0) {
    return 'Escribe una contraseña'
  } else if (!validator.isStrongPassword( password )) {
    toast.fire({
      icon: 'warning',
      title: 'Ejemplo de contraseña segura: Abcd1234!'
    })
    return 'Usa una contraseña fuerte'
  } else if (password !== passwordConfirm) {
    return 'Contraseñas diferentes'
  }
  return ''
}
