import React from 'react'

function boton(nombre, funcion) {
  return (
    <button className='Boton_boton'
    onClick={()=>{
        funcion();
    }}
    >
    {nombre}
    </button>
  );
};

export default boton