import React from 'react'

const Listado = ({datos}) => {
  return (
    <ul>
        {datos.map((v,i)=>(
            <li key={i}>{i + 1} - {v}</li>
        ))}
    </ul>
  )
}

export default Listado