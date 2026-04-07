import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // Function to handle fruit button clicks
  function FruitClick(fruitName) {
    alert("you click on " + fruitName);
  }

  return (
    <>
      <div>
        <button onClick={() => FruitClick("apple")}>
          Apple
        </button>
        <button onClick={() => FruitClick("banana")}>
          Banana
        </button>
      </div>

      <div>
        <button onClick={() => alert("click on ok")}>
          OK
        </button>
      </div>

      <div>
        <h1>Welcome to New Project </h1>
      </div>
    </>
  )
}

export default App
