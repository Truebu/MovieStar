import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiMovieAsync, apiReload } from '../../actions/api'
import { startLoading } from '../../actions/ui'
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
        <Navbar />
      </div>
      <div>
        <NavGenders setQuerys={setQuerys}/>
      </div>
      <div>
        <h1>Hello Home </h1>
      </div>
    </>
  )
}
