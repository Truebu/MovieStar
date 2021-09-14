import axios from "axios";
import { useEffect, useRef, useState } from "react"


export const useUrl = ( url = '/movie/popular', params = {}) => {
  const [state, setState] = useState({data: null, loading: true, error: null})

  const isMounted = useRef(true)
  useEffect( () => {
    return () => {
      isMounted.current = false
    }
  }, [])

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3${url}`,
    params: {
      ...params,
      api_key: '3deb2ae011b05f1ba4d5a5dad095f61b'
    }
  };

  useEffect( () => {
    setState({data: null, loading: true, error: null})
    axios.request(options)
      .then( resp => resp.data.results )
      .then( results => {
        if (isMounted.current) {
          setState ({
            loading: false,
            error: null,
            data: results
          })
        }  
      })
      .catch( () => { 
        setState({
          data: null,
          loading: true,
          error: 'No se pudo generar la info'
        })
      })
  }, [])

  return state
}


