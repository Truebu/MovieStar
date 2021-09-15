import React from 'react'
import { useUrl } from '../../hooks/useUrl'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

export const HomeScreen = () => {
  
  const options = useUrl('/search/movie', {
    query: 'Avengers'
  })
  
  console.log(options)

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <NavGenders />
      </div>
      <div>
        <h1>Hello Home</h1>
        <button>hello</button>
      </div>
    </>
  )
}
