import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const orders = [100, 200, 300]

function App() {
  
  
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, curentValue) => total + curentValue)
  
      console.log(total);
      return total
  })
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  const handleDecrease = () => {
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      <Header counter={counter} ></Header>
      <Body handleIncrease={handleIncrease} handleDecrease={handleDecrease} counter={counter}></Body>
      <Footer></Footer>
      {/* 
      <h1>Header</h1>  
      <h1>Body</h1>  
      <h1>Footer</h1>   */}

      {/* <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button> */}
    </div>
  );
}

export default App;
