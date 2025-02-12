import React from 'react';
import Mensaje from './Mensaje';
import Lineapuntuacion from './Lineapuntuacion';

export default function Puntuacion({msj, puntuacion , score}) {
  return (
    <div>
       
       <div class="score-section">
        <br/>
        <Mensaje msj={msj}/>
        <br/>
        {/* puntuacion */}
        <Lineapuntuacion etiqueta="Puntuación:" id="score" numero={puntuacion}/>
        {/* Puntuacion más alta  */}
        <Lineapuntuacion etiqueta="Puntuaje Alto:" id="highscore" numero={score}/>
      </div>
    </div>
  )
}
