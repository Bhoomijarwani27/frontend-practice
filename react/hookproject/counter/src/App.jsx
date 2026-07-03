import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);

  const addvalue = () => {
    console.log("add value button clicked",counter); // show on console when button is clicked it was just for testing purpose
    setCounter(counter + 1);
  };
  // function to subtract the value of counter by 1 but not less than 0
  const subvalue = () => { // simple way of doing it
    // if (counter > 0) {
    //   setCounter(counter - 1);
    // } else {
    // setCounter(0);
// }
  
   setCounter((prev) => (prev > 0 ? prev - 1 : 0)); // short way of doing 
    
  };
  return (
    
    <>
      <h1> React Counter </h1>
      <br/>
      <h2> counter value: {counter} </h2>
      <br/>
      <div className="button-row">
        <button className="button" onClick={addvalue}>ADD value</button>
        <button className="button" onClick={subvalue}>SUB value</button>
      </div>
      
    </>
  )
}

export default App
