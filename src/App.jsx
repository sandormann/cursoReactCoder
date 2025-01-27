import { useState } from 'react'
import './App.css'

// COMPONENTS

import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  
  return (
    <>
        <Navbar />
        <ItemListContainer title="Espera nuestro nuevo catálogo de libros"/>
    </>
  )
}

export default App
