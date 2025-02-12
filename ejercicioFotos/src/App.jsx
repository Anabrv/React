import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import BotonSaludar from './componentes/BotonSaludar'

function App() {
 
    const [name,setName]= useState("");
    const [edad,setEdad]= useState("");
    const [mostrar,setMostrar]= useState("");
    
    const handleName = (e)=>{
      setName(e.target.value);
      
    }
    const handleEdad = (e) => {
      setEdad(e.target.value);
    }
    /* MOSTRAR POR BOTON */
    const mostrarInfo = () =>{
      console.log("cliky")
      setMostrar(compararEdad(edad));
    }

    const compararEdad = (edad) => {
      if(edad < 12 ){
        setMostrar(`Hola, ${name}, eres un nene`);
      } else if(edad > 12 && edad < 20){
        setMostrar(`Hola, ${name}, eres joven`);
      } else if(edad > 20 && edad < 40){
        setMostrar(`Hola, ${name}, eres mayor`);
      }
      else{
        setMostrar(`Hola, ${name}, eres un anciano`);
      }
    }

    
  return (
    <div className='container'>
    <h1>Nombre: </h1>
    <input onChange={handleName} value={name} type="text" />
    <h1>Edad: </h1>
    <input onChange={handleEdad} value={edad} type="number" />
    <br />
     <BotonSaludar onClick={mostrarInfo}/> 

{/* SI NO PONGO LA VARIABLE, NO SE MUESTRA */}
    <h1>{mostrar}</h1>
    </div>
  )
}
export default App


