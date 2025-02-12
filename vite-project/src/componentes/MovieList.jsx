import React from 'react'

export default function MovieList() {

    const movies =[
        "Lord of The Rings", "Star Wars", "Dune", "Warcraft"
    ];
/* Metodo MAP */
    const HTMLMovies = movies.map((movie,index)=> {
        return <p key={movie}>{index+1}-{movie}</p> /* El +1 es para que no se muestre en 0 el primer elemento de la lista */
    })

  return (
    <section>

 
    <h2>Movies</h2>
    {HTMLMovies}

    </section>


  )
}
