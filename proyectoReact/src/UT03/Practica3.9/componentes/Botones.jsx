import React from 'react'

export const Botones = ({nombre, funcion}) => {
  return (
    <button className='Botones'
    onClick={()=>{
        funcion();
    }}
    >{nombre}
    </button>
  )
}
