import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiMovieAsync, apiReload } from '../../actions/api'
import { MovieModal } from '../movies/MovieModal'
import { MovieScreen } from '../movies/MovieScreen'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

const initialQuery = {
  url: '/movie/popular',
  querys: {}
}

export const HomeScreen = () => {

  const dispatch = useDispatch()
  const [querys, setQuerys] = useState(initialQuery)
  const {loading} = useSelector(state => state.ui)
  const {data} = useSelector(state => state.apiForm.data)

  const [component, setComponent] = useState()

  
  useEffect(() => {
    dispatch( apiMovieAsync( querys.url, querys.querys))
    return () => {
      dispatch( apiReload() )
    }
  }, [dispatch, querys])
  
  
  if (loading) {
    return <h1>... wait</h1>
  }

  return (
    <>
      <div>
        <Navbar setQuerys={setQuerys}/>        
      </div>
      <div>
        <NavGenders setQuerys={setQuerys}/>
      </div>
      <div>
      </div>
      {/* Los estilos van aqui 🔽 */}
      <div>
        {
          (!loading) &&
          (data?.total_results === 0)
          ? <div>
              {/* componentes de Search */}
              Tu resultado no esta en la busqueda
            </div>
          : <div>
              {
                data?.results.map(movie => (
                  <MovieScreen
                    key={movie.id}
                    {...movie}
                  />
                ))
              }
            </div>          
        }
      </div>
    </>
  )
}
