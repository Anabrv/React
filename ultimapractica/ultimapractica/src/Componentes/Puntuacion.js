import React from 'react';
import Mensaje from './Mensaje';
import Lineapuntuacion from './Lineapuntuacion';

export default function Puntuacion() {
  return (
    <div>
       
       <div class="score-section">
        <br/>
     

        <br/>
        {/* puntuacion */}
        <Lineapuntuacion etiqueta="Puntuación:" id="score" numero="20"/>
        {/* Puntuacion más alta  */}
        <Lineapuntuacion etiqueta="Puntuaje Alto:" id="highscore" numero="0"/>
      </div>
    </div>
  )
}
