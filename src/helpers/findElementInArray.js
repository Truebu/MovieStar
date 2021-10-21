import { toast } from '../features/swalMixings';

export const findElementInArray = (arr1,arr2,movie,logged,tagged) => {

  if (!logged) return 'bad login'
  
  if (tagged === 'cart') {
    const elementInArr1 = arr1.find(e => e.id === movie.id);
    const elementInArr2 = arr2.find(e => e.id === movie.id);    
    if (!!elementInArr2 || !!elementInArr1) {
      toast.fire({
        icon: 'warning',
        title: 'Ya la adquiriste o esta en tu carrito'
      })
      return 'disabled cart'
    }
    return 'enabled cart'
  } else if(tagged === 'buy') {
    const elementInArr2 = arr2.find(e => e.id === movie.id)    
    if(!!elementInArr2){
      toast.fire({
        icon: 'warning',
        title: 'Ya la adquiriste o esta en tu carrito'
      })
      return 'disabled buy'
    }
    return 'enabled buy'
  }
}
