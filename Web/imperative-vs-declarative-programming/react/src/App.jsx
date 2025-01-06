import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// let count = 19; // normal variable

function App() {

  // stateful variables: trigger UI re-renders
  const [count, setCount] = useState(9);
  // const countState = useState(1);
  

  const increaseCount = () => {
    // count++;

    setCount(count+1);
    // countState[1](countState[0] + 1);

    console.log(count); 
  }
  

  return (
    <div>
      <button>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default App
