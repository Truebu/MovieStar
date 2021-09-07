import Swal from 'sweetalert2';
import validator from 'validator';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


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
    Toast.fire({
      icon: 'warning',
      title: 'Ejemplo de contraseña segura: Abcd1234!'
    })
    return 'Usa una contraseña fuerte'
  } else if (password !== passwordConfirm) {
    return 'Contraseñas diferentes'
  }
  return ''
}
