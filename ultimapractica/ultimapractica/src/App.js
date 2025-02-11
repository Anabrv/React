
import './App.css';
import Reiniciar from './Componentes/Reiniciar';
import Numerosecreto from './Componentes/Numerosecreto';
import Formulario from './Componentes/Formulario';
import Puntuacion from './Componentes/Puntuacion';
import Mensaje from './Componentes/Mensaje';
import { use, useState } from 'react';

function App() {
  const generarNumSecreto = ()=>{
    return Math.trunc(Math.random()*20) +1; /*  */
  }
  const reiniciar =()=>{
    setNumSecreto(generarNumSecreto);
    setMensaje("Empiece a adivinar...");
    setPuntuacion(20);
  }

  const comparar=(numero)=>{
    if (!numero){
      setMensaje("Pon un número");
    } else if(Number(numero) == numSecreto){ /* hay que pasarlo si o si a número */
      setMensaje("Ganaste!");
      document.body.style.backgroundColor="green";
      if(score<puntuacion){
        setScore(puntuacion);
      }
      
    } else if (Number(numero) < numSecreto){
      setMensaje("tu número es bajo");
      setPuntuacion(puntuacion -1);
    } else {
      setMensaje("Tu número es alto");
      setPuntuacion(puntuacion -1);
    }

    if(puntuacion == 0){
      setMensaje ("Perdiste");
      document.body.style.backgroundColor="red";
    }
  }
  const [numSecreto,setNumSecreto] = useState(); /* Declarar variable */
  const [mensaje,setMensaje]=useState("Empiece adivinar...");
  const [puntuacion,setPuntuacion]=useState();
  const [score,setScore] =useState(0);

  return (
    <div className="container">
      <Reiniciar reiniciar={reiniciar}/>
      <h1>¡Adivina mi número!{numSecreto}</h1>
      
      <Numerosecreto></Numerosecreto>
      <br/>
      <Formulario></Formulario>
      <Puntuacion></Puntuacion>
      
    
     
    </div>
  );
}

export default App;
