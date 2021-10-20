import { toast } from "../../features/swalMixings";

export const findElementInArray = (arr1, element, logged) => {
  const alert = toast.fire({
    icon: 'warning',
    title: 'Revisa el carrito o tus peliculas'
  })
  if (logged) {
    const elementInArr1 = arr1.find(e => e.id === element)
    if (!!elementInArr1) return alert
    return elementInArr1;
  }
}
