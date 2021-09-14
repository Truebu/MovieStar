import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useUrl } from '../../hooks/useUrl'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

export const HomeScreen = () => {
  
  const a = useUrl()
  console.log(a)

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
