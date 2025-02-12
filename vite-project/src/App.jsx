import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './componentes/HeaderComponent'
import ButtonComponent from './componentes/ButtonComponent'
import Login from './componentes/Login'
import MovieList from './componentes/MovieList'
import AnimalList from './componentes/AnimalList'


function App() {
  /* VARIABLES */
  /* let number = 0; */
  const [number, setNumber] = useState(0); 
  const [myValue, setMyValue] = useState("");
  let myPlaceHolder = "Escribe aqui";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web");
  const links = { /* Esta variable va a tener dentro un objeto */
    home :"Home",
    blog : "Blog",
    news : "News",
    contact :"Contact Us"
  }

  const condition = true;

  /* FUNCIONES */
  const addOne = () => {
   /*  number++; */
   setNumber(number + 1) /* No podemos poner el ++ , automaticamente ya va sumando de uno en uno  */
    console.log(number);
  }
  const [count, setCount] = useState(0)

  const sayHello = () => { /* Evento que al clicar sale hola */
    console.log("Hello")
  }
  const handleChange = (e) => {  /* vamos a recibir un objeto,  que suele llamarse e */
    console.log(e.target.value); /* Esto muestra en console directamente el valor del target, en este caso es el input */
  }

//Login
  const [user, setUser] = useState({ /* Lo creamos en formato objeto , normalmente estara vacio */
  });
  const login = (userInfo) => { /* recibe objeto  */
    console.log(userInfo);
    setUser(userInfo) /* setea la variable reactiva */
  }



  return (
    <>
      <HeaderComponent greetings={greetings} links={links}/> {/* El nombre es lo de menos, se puede llamar como queramos */} {/* A un mismo componente se la pueden pasar varios props */}
      <main className="mainContent"> {/* Selector especifico, REACT no acepta class ya que es un nombre reservado */}
      <h2 onClick={sayHello}>Hola {user.name} </h2>

      <Login handdleLogin = {login}/> {/* Le estamos pasando un prop al hijo, cuyo valor es una funcion  */}


      {/* RENDERIZACION CONDICIONAL , funciona como un if */}
      {condition && <h2>La condicion se cumple</h2>}
      {!condition && <h2>LA condicion no se cumple</h2>}
      {/* Lo mismo con ternario */}
      {condition ? (<h2>La condicion se cumple</h2>) : (<h2>LA condicion no se cumple</h2>
      )}

      {/* RENDERIZACION DE LISTAS */}
      <MovieList/>

      <AnimalList/>

      <h2 onClick={addOne}>Number: {number} </h2>

      <input value={myValue} placeholder={myPlaceHolder} type="text" onChange = {handleChange} />
      <br />
      <br />
      <ButtonComponent/>
      </main>
    </>
  )
}

export default App
