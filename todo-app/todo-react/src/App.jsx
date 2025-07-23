import { useState } from "react";

// const drinks = ['coffee', 'water', 'orange juice'];

function App() {
  let name = "Bach Duy";
  // let count = 1;

  // state: trạng thái

  // hook: React's functions to change the state
  // use[...]

  const [count, setCount] = useState(10);

  // const countState = useState(10);


  const [drinks, setDrinks] = useState(['coffee', 'water', 'orange juice']);
  

  const increase = () => {
    // count++;
    // queryselect(span).textcontent = count mới
    
    
    setCount(count + 1);
    // countState[1](countState[0] + 1)
  }

  // console.log(count);

  const decrease = () => {
    setCount(count - 1);
  }

  const onEditClick = (drink) => {
    console.log(drink);
  }

  const drinkList = drinks.map(drink => (
          <li key={drink} style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
            <span>{drink}</span>
            <div>
              <button onClick={() => onEditClick(drink)}>Edit</button>
              <button>Delete</button>
            </div>
          </li>
        ))

  console.log(drinkList);

  console.log('App component re-rendered');
  
  const onAddDrinkSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt);

    const value = evt.target[0].value;
    console.log(value);

    setDrinks([...drinks, value])
  }

  return (
    <div>
      <h1>Hello React :D</h1>
      <p>{name}'s todo app {"{}"}</p>

      <div>
        <button onMouseDown={decrease} onMouseUp={decrease}>-</button>
        <span style={{ margin: '16px' }}>{count}</span>
        <button onClick={increase}>+</button>
      </div>

      <h1>Drinks</h1>
      <form action="" onSubmit={onAddDrinkSubmit}>
        <input type="text" />
        <button>Add drink</button>
      </form>
      <ul>
        {drinkList}

        {/* {[
          <li>1</li>,
          <li>2</li>
        ]} */}
      </ul>
    </div>
  )
}

export default App
