import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('') // Estado para guardar usuario//
  const [clave, setClave] = useState('')   // Estado para guardar clave//
  const [logueado, setlogueado]= useState (false) // Estado para para saber si esta logueado//
 
  // Funcion para cambiar el valor de usuario//
function cambiarUsuario (evento) {
  setUsuario(evento.target.value)
 }

   // Funcion para cambiar el valor de clave//
function cambiarClave (evento) {
  setClave(evento.target.value)
 }
function ingresar () {
  console.log('Usuario:',usuario)
  console.log('Clave:' ,clave)
  if (usuario==='admin' && clave ==='admin'){
    alert("Super!, Datos correctos")
    setlogueado(true)
  }
  else{
    alert("No es la información correcta!")

  }
 }

  return (
    <> 
    {/* Condicion para mostrar la pantalla de inicio*/}
    {logueado ? (<>
      <h1>Escoge tu Patrocinador para Ganar</h1>
    </>) : ( 
      <>
     
      <h2>Inicia tu sesión</h2>
      <label htmlFor='usuario'> Usuario;
        <input type="text" value={usuario} onChange={cambiarUsuario} />
      </label>
      <label htmlFor='clave'> Clave;
        <input type="password" value={clave} onChange={cambiarClave} />
      </label>  
      <button type="submit" onClick = {ingresar}>ingresar</button>
    </>
    ) }
    </>  
  )
}       
export default App
