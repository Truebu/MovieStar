

export const handleErrorRegister = (message) => {
  switch(message){
    case "The email address is already in use by another account.":
      return "La cuenta ya esta registrada"
    default:
      return 'Ha ocurrido un error inesperado'
  }
  
}
