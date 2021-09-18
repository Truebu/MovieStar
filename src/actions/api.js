import axios from "axios"
import { types } from "../types/types"
import { finishLoading, startLoading } from "./ui"

export const apiMovieAsync = (url, entrieParams) => {
  return (dispatch) => {
    dispatch( startLoading() )
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3${url}`,
      params: {
        ...entrieParams,
        api_key: '3deb2ae011b05f1ba4d5a5dad095f61b'
      }
    }).then( async (resp) => {
      await dispatch( apiMovie(resp) )
      dispatch(finishLoading())
    }).catch((e) => {
      dispatch(finishLoading())
      console.log(e)
    })  
  }
}

export const apiMovie = (data) => ({
  type: types.api,
  payload: data
})

export const apiReload = () => ({
  type: types.apiReload
})
