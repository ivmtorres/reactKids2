import React from 'react';
/*
Le ponemos index.jsx o index.js porque siempre automaticamente
cuando lo importa busca un archivo llamado index.
*/
export default function Prop({title}){
return <h2>{title} </h2>
} //exportamos nuestro componente las props son de solo lectura
//el unico que lo puede cambiar es el que la esta llamando
//cuando crea la etiqueta
