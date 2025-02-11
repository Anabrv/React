import React from 'react'

export default function Lineapuntuacion({etiqueta, id , numero}) {
  return (
    <div>
       <p>{etiqueta}<span id={id}>{numero}</span></p>
    </div>
  )
}

/* Tambien prodríamos usar el props */