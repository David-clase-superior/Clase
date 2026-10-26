import React, { useState } from "react";
import "./App.css";
import matriculados  from "./UT03/Practica3.9/matriculados.json";
//import { Mostrar } from "./UT03/Practica3.9/componentes/Mostrar.jsx";
import { Botones } from "./UT03/Practica3.9/componentes/Botones.jsx";


const App = () => {
  const matriculadosInicial = matriculados;
  const [alumnos, setAlumnos] = useState(matriculadosInicial);
  console.log(matriculados);
    const alumnosSegundoDaw = () => {
        setAlumnos(alumnos.filter((v)=> v.curso.includes("2")));
    };
    const alumnosDePrimero = () => {
        setAlumnos(alumnos.filter((v)=> v.curso.includes("1")));
    }
    const alumnosDaw = () => {
        setAlumnos(alumnos.filter((v)=> { return v.curso.toLowerCase().includes("daw")}
        
      ));
    };
    const alumnosLectura = () => {
        setAlumnos(alumnos.filter((v)=> v.aficiones.includes("lectura")
      ));
    };
    const alumnosPorApellidos = () => {
        setAlumnos([...alumnos].sort((a,b)=>a.apellidos.localCompare(b.apellidos)
      ));
    };
    const reiniciar = () => {
        setAlumnos(matriculadosInicial);
    };
    //state date array json react

  return (
    <>
      <h2>Numeros Aleatorios.</h2>
      <div>
      <Botones nombre="Reiniciar" funcion={reiniciar}></Botones>
      <Botones nombre="alumnos Segundo Daw" funcion={alumnosSegundoDaw}></Botones>
      <Botones nombre="alumnos De Primero" funcion={alumnosDePrimero}></Botones>
      <Botones nombre="alumnos Daw" funcion={alumnosDaw}></Botones>
      <Botones nombre="alumnos Lectura" funcion={alumnosLectura}></Botones>
      <Botones nombre="alumnos Por Apellidos" funcion={alumnosPorApellidos}></Botones>
      </div>

     
       
    </>
  );
};

export default App;