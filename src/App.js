import React from 'react'
import "./App.scss"

const App = () => {
   const temp = {
      name: "adarsh",
      
   }
  return (
    <div className="app">
     {temp?.name}
    </div>
  );
}

export default App