
export const findElementInArray = (array, find) => {  
  return array.find(element => {
    return element.movie?.id === find
  })
}
