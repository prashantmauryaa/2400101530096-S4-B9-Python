import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let x = 20;
  let y = 19;
  function name() {
    return "My name is Prashant Maurya";
  }
  function sum(a, b) {
    return a + b;
  }
  function calc(a, b, operation) {
    if (operation === "+") return a + b;
    if (operation === "-") return a - b;
    if (operation === "*") return a * b;
    return "Invalid operation";
  }





  return (
    <>
      <h1> User variable with jsx</h1>

      <h3>Value of variable is: {x + y}</h3>
      <h2>{name()}</h2>
      <h2>{sum(x, y)}</h2>
      <h2>calc({x}, {y}, "+") = {calc(x, y, "+")}</h2>
      <h2>calc({x}, {y}, "-") = {calc(x, y, "-")}</h2>
      <h2>calc({x}, {y}, "*") = {calc(x, y, "*")}</h2>
    </>
  )
}

export default App
