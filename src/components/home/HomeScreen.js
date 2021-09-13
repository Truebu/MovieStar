import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Navbar } from '../ui/Navbar'
import { NavGenders } from '../ui/NavGenders'

export const HomeScreen = () => {

  /* const url = "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json"
  const state = useFetch(url)
  console.log(state) */

  fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=avengers&page=1&limit=10&r=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "fe971cd4ffmsh0d53373ef3eb391p11f957jsna3ac9544c27a"
	}
})
.then(response => {
	console.log(response.body);
})
.catch(err => {
	console.error(err);
});

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
