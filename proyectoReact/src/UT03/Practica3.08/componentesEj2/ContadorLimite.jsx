import React from 'react'

const ContadorLimite = ({nombre, funcion, disabled}) => {
  return (
    <button className='botones'
    onClick={()=>{
        funcion();
    }}disabled={disabled}
    
    >{nombre}
    </button>
  )
}

export default ContadorLimite