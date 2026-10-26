import React, { useState } from "react";
import "./App.css";
import { matriculados } from "./UT03/Practica3.9/matriculados.json";
//Valor inicial

const matriculadosInicial = [matriculados.json];
const [alumnos, setAlumnos] = useState(matriculadosInicial);


const App = () => {
    const alumnosSegundoDaw = () =>{
        setAlumnos(alumnos.filter((v)=>v.curso.includes("2")));
    };
    const alumnosDePrimero = () =>{
        setAlumnos(alumnos.filter((v)=>v.curso.includes("1")));
    }
    const alumnosDaw = () =>{
        setAlumnos(alumnos.filter((v)=> v.curso.toLowerCase().includes("daw")));
    };
    const alumnosLectura = () =>{
        setAlumnos(alumnos.filter((v)=>v.aficiones.includes("lectura")));
    };
    const alumnosPorApellidos = () => {
        setAlumnos([...alumnos].sort((a,b)=> (a.apellidos < b.apellidos) ? -1 : a.apellidos > b.apellidos ? 1 : 0));
    };
    const reiniciar = () => {
        setAlumnos(matriculadosInicial);
    };

  return (
    <>
     
    </>
  );
};

export default App;