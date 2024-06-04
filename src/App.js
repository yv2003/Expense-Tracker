import React from 'react'
import Add from './components/Add';
import "./App.css"
function App() {
  
  return (
    
    <div className=''>
      <div className=''>
      {/* <h1 className='font-bold text-center text-4xl p-5'>Current Balance : $400<span>.00</span></h1> */}
      <form>
        {/* <input type='text' name="amount" placeholder='Amount spent' className='p-1'/>
        <input type='text' placeholder='Transaction Description' className='p-1'/>
        <input type='date-time--local'/> */}
          {/* <button onClick={addTransactionDetails}>ADD</button> */}
          <Add/>
        </form>
      </div>
     </div>
  )
}

export default App
