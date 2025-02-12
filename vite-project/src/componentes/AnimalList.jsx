import React from 'react'

export default function AnimalList() {
    const animals = [
        {
            id:1,
            name:"dog",
            img: "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80"
        },

        {
            id:2,
            name: "gato",
            img: "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=1179"
        },

        {
            id:3,
            name:"Pajaro",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/640px-Eopsaltria_australis_-_Mogo_Campground.jpg"
        },
        {
            id:4,
            name:"Caballo",
            img: "https://www.zotal.com/wp-content/uploads/2019/08/razascaballos.png"
        }
    ]

    const HTMLAnimals = animals.map((animal)=>{ /* Por cada elemento queremos devolver los elementos */
        return (
            <li key = {animal.id}>
                <h3>{animal.name}</h3>
                <img src={animal.img} alt="animal picture" width={200} />
            </li>
        )
    })

  return (
    <section>
    <h1>Animal:</h1>
    <ul>
    {HTMLAnimals}
    </ul>
    </section>
  )
}
