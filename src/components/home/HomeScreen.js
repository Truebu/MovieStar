import React from 'react'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

export const HomeScreen = () => {
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
      </div>
    </>
  )
}
