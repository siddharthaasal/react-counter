import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = React.useState(0);

  function updateCount(){
    setCount(count+1);
  }

  return (
    <>
      <h1>Counter </h1>
      <button onClick={updateCount}>
        {count}
      </button>
  
    </>
  )
}


export default App
