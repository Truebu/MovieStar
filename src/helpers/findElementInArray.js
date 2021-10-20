import { toast } from '../features/swalMixings';

export const findElementInArray = (
  arr1,
  arr2,
  movie,
  logged,
  tagged
) => {
  
  if (!logged) return false
  if (tagged === 'cart') {    
    const elementInArr1 = arr1.find(e => e.id === movie.id);
    const elementInArr2 = arr2.find(e => e.id === movie.id);
    console.log(elementInArr2);
    if (!!elementInArr2) {
      toast.fire({
        icon: 'warning',
        title: 'Ya la tienes esta pelicula'
      })
      return false
    }
    if(!!elementInArr1){
      toast.fire({
        icon: 'warning',
        title: 'Ya la tienes en el carrito'
      })
      return false
    }
    return elementInArr1
  } else if(tagged === 'buy') {    
    const elementInArr2 = arr2.find(e => e.id === movie.id)
    if(!!elementInArr2){
      toast.fire({
        icon: 'warning',
        title: 'Ya la Adquiriste'
      })
      return false
    }
    return elementInArr2
  }

}
