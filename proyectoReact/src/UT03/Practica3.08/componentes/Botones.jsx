import React from 'react'

const Botones = ({nombre, funcion}) => {
  return (
    <button className='Botones'
    onClick={()=>{
        funcion();
    }}
    
    >{nombre}
    
    </button>
  )
}

export default Botones