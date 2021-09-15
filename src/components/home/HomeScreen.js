import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiMovieAsync, apiReload } from '../../actions/api'
import { useUrl } from '../../hooks/useUrl'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

export const HomeScreen = () => {

  const dispatch = useDispatch()
  const [checkData, setCheckData] = useState(false)

  useEffect(() => {
    dispatch( apiMovieAsync( '/movie/popular', {} ))
    setCheckData(true)
    return () => {
      dispatch( apiReload() )
      setCheckData(false)
    }
  }, [dispatch])


  if (!checkData) {
    return <h1>... wait</h1>
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <NavGenders />
      </div>
      <div>
        <h1>Hello Home </h1>
      </div>
    </>
  )
}
