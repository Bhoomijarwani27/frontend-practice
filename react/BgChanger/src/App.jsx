import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState('black') 
  

  return (
    <>
      <div className='h-screen duration-200 w-full '
        style = {{backgroundColor : color }}
        >
          <div className= 'flex flex-wrap   right-4 inset-x-0 px-2  m-3'>
          <div className='gap-3 bg-pink-200 shadow-lg px-3  py-2 rounded-3xl'> 
           <button onClick={()=> setcolor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "red"}}> Red  </button>
            <button onClick={()=> setcolor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "green"}}> Green   </button>
             <button onClick={()=> setcolor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "blue"}}> Blue  </button>
              <button onClick={()=> setcolor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor : "black"}}> Black </button>
               <button onClick={()=> setcolor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor : "white"}}>  White  </button>
           </div>
          </div>
        </div>

    </>
  )
}

export default App;
