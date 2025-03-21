import { useState } from 'react'
import MyComponents from './components/MyComponents'
import './App.css'
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0);
  const n = 15;
  const [name] = useState("Matheus");
  const [redTile] = useState(false);

  return (
    <>
    {/* CSS global */}
      <h1>React com CSS</h1>
    {/* CSS de componente */}
      <MyComponents />
      <p>Este paragrafo é do APP</p>
    {/* Inline CSS */}
    <p style={{color: "red", padding:"25px", borderTop:"2px solid red"}}>Este elemento foi estilizado de forma inline</p>
    {/* CSS inline style dinamico */}
    <h2 style={n > 10 ? {color:"Purple"}:{color:"brown"}}> CSS Dinamico</h2>
    <h2 style={name === "Matheus" ? {color:"Purple", backgroundColor:"black"}:null}> CSS Dinamico</h2>
    {/* CSS classe dinamico */}
    <h2 className={redTile ? "red-title":"title"}>CSS Classe Dinamico</h2>
    {/* CSS modules*/}
    <Title />

    </>
  )
}

export default App
