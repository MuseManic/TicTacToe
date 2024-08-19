import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'




interface SquareProps {
  value: string; 
}

function Square() {

  const [value, setValue] = useState<null | String>(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
     {value} 
    </button>
  );
}


export default function board() {
  return ( <> 
  <div className='boardrow'> 
      <Square/>
      <Square/>
      <Square/>
  
  </div>
  <div className='boardrow'>
  <Square/>
  <Square/>
  <Square/>

  </div>
  <div className='boardrow'>
  <Square/>
  <Square/> 
  <Square/>
  </div>
  
  </>)
}
