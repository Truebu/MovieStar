
export const types = {

  login:  '[auth] login',
  logout: '[auth] logout',
  
  uiSetError: '[UI] uiSetError',
  uiRemoveError: '[UI] uiRemoveError',
  uiStartLoading: '[UI] uiStartLoading',
  uiFinishLoading: '[UI] uiFinhisLoading',
  uiOpenModal: '[UI] OpenModal',
  uiCloseModal: '[UI] CloseModal',

  api: '[API] ImdMovie',
  apiReload: '[API] Reload',

  activeMovie: '[Movie] ActiveMovie',
  inactiveMovie: '[Movie] inactiveMovie',
  buyMovie: '[Movie] Buy Movie',
  moviesLoad: '[Movie] Load Movies',
  buyAllMovies: '[Movie] buy all movies in the cart',
  
  buyMovieThroughCart:'[Cart] buyMovieThroughCart' ,
  cartAddMovie: '[Cart] addCartMovie',
  cartBuyMovie: '[Cart] buyMovie',
  cartClean: '[Cart] cleanCart',

  cartIdsCleaner: '[Cart] clen ides',
  cartIdClean: '[Cart] clean one id'

}
