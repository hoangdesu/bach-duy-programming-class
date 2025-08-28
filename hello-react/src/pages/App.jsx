import { useEffect, useState } from "react";
import MyButton from "../components/MyButton";

import BootstrapButton from 'react-bootstrap/Button';
import MUIButton from '@mui/material/Button';

// Module CSS
import styles from '../todo-app.module.css';

// const drinksArray = ['coffee', 'water', 'orange juice'];

const drinksData = [
  {
    id: 1,
    name: 'coffee'
  },
  {
    id: 2,
    name: 'water'
  },
  {
    id: 3,
    name: 'orange juice'
  }
];

function App() {
  let name = "Bach Duy";
  // let count = 1;

  // state: trạng thái

  // hook: React's functions to change the state
  // use[...]

  const [count, setCount] = useState(10);

  // const countState = useState(10);

  const initialDrinkState = drinksData.map(d => {
    return {
      ...d,
      isEditing: false
    }
  });


  const [drinks, setDrinks] = useState(initialDrinkState);
  const [len, setLen] = useState(drinks.length);

  const [isOn, setIsOn] = useState(false);


  // const [isEditing, setIsEditing] = useState(false);

  // Derived value
  // const len = drinks.length;

  const increase = () => {
    // count++;
    // queryselect(span).textcontent = count mới
    
    
    setCount(count + 1);
    // countState[1](countState[0] + 1)
  }

  // console.log(count);

  // Only called once when the component is mounted to the screen
  // componentDidMount()
  useEffect(() => {
    console.log('App mounted!!!')
  }, []);

  // changing state A will change state B

  // Will only update length after drinks state has finished updating
  // componentDidUpdate()
  useEffect(() => {
    setLen(drinks.length);
  }, [drinks]);


  // Without deps array: run AFTER every update
  // componentDidUpdate()
  useEffect(() => {
    console.log('no dependency array');
    console.log('after render:', drinks, len);
  });
  

  const decrease = () => {
    setCount(count - 1);
  }

  const onEditClick = (drink) => {
    console.log(drink);
    const updatedDrinks = [...drinks];

    // linear search
    for (const updatedDrink of updatedDrinks) {
      if (updatedDrink.id === drink.id) {
        updatedDrink.isEditing = true;
      }
    }

    setDrinks(updatedDrinks);
  }

  const onCancelClicked = (drink) => {
    console.log(drink);
    const updatedDrinks = [...drinks];

    // linear search
    for (const updatedDrink of updatedDrinks) {
      if (updatedDrink.id === drink.id) {
        updatedDrink.isEditing = false;
      }
    }

    setDrinks(updatedDrinks);
  }

  const deleteHandler = drink => {
    const newDrinks = [...drinks];
    newDrinks.splice(drinks.indexOf(drink), 1);
    // console.log('new drinks has been set');

    setDrinks(newDrinks); // async function
    // setLen(drinks.length); // 
  }

  const onSaveHandler = (evt, drink) => {
    console.log(evt);
    
    evt.preventDefault();

    console.log('saving', drink.name);
    console.log(evt.target[0].value);

    const updatedDrinks = [...drinks];

    for (const d of updatedDrinks) {
      if (d.id === drink.id) {
        d.name = evt.target[0].value;
        d.isEditing = false;
      }
    }

    setDrinks(updatedDrinks);
  }

  const drinkList = drinks.map(drink => (
          // <li key={drink.id} style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
          //   {drink.isEditing ? (
          //     <input defaultValue={drink.name} onKeyDown={e => e.key === 'Enter' && onSaveHandler(drink)}></input>
          //     ) : (
          //     <span>{drink.name}</span>
          //     )}
          //   <div>
          //     {drink.isEditing ? (
          //       <>
          //         <button onClick={() => onSaveHandler(drink)}>Save</button>
          //         <button onClick={() => {}}>Cancel</button>
          //       </>
          //     ) : (
          //       <>
          //         <button onClick={() => onEditClick(drink)}>Edit</button>
          //         <button onClick={() => deleteHandler(drink)}>Delete</button>
          //       </>
          //     )}
          //   </div>
          // </li>

          <li key={drink.id} draggable={true}>
            {drink.isEditing ? (
              <form style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }} onSubmit={(evt) => onSaveHandler(evt, drink)}>
                <input defaultValue={drink.name} />
                <div>
                  <button>Save</button>
                  <button type="button" onClick={() => onCancelClicked(drink)}>Cancel</button>
                </div>
              </form>
            ) : (
              <div style={{ display: 'flex', width: '400px', justifyContent: 'space-between' }}>
                <span>{drink.name}</span>
                <div>
                  <button onClick={() => onEditClick(drink)}>Edit</button>
                  <button onClick={() => deleteHandler(drink)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ));

  console.log(drinkList);

  console.log('App component re-rendered');
  
  const onAddDrinkSubmit = (evt) => {
    evt.preventDefault();
    // console.log(evt);

    const value = evt.target[0].value;

    // guard clause: early return
    if (drinks.includes(value)) {
      alert('Drink already exists');
      evt.target[0].value = '';
      return;
    }

    // reset the input
    evt.target[0].value = '';

    console.log(value);

    setDrinks([...drinks, {
      id: Math.random(),
      name: value,
      isEditing: false
    }]);
  }

  return (
    <>
      <h1>Hello React :D</h1>
      <p>{name}'s todo app {"{}"}</p>

      <div>
        <button onMouseDown={decrease} onMouseUp={decrease}>-</button>
        <span style={{ margin: '16px' }}>{count}</span>
        <button onClick={increase}>+</button>
      </div>

      <div>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
      </div>

      <h1>Drinks</h1>
      <form action="" onSubmit={onAddDrinkSubmit}>
        <input type="text" />
        <button>Add drink</button>
      </form>
      <p>There are {len} drinks</p>
      <ul>
        
        {drinkList}

        {/* {[
          <li>1</li>,
          <li>2</li>
        ]} */}

      </ul>

      <button className={styles.pkmBtn}>TODO APP BUTTON</button>
      <div>PKM BTN</div>

      <BootstrapButton>Bootstrap Button</BootstrapButton>
      <BootstrapButton variant="outline-success">Bootstrap Button success</BootstrapButton>

      <MUIButton variant="contained">MUI Button</MUIButton>
    </>
  )
}

export default App
