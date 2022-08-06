import './App.css';
import Temperature from './Temperature'
import Button from './Button'
import {useState} from 'react'
function App() {
  
  const [temp, setTemp] = useState(24)
  function handleIncrement(){
    setTemp( (prevState) => prevState + 1 )
  }
  function handleDecrement(){
    setTemp( (prevState) => prevState - 1 )
  }   

  return (
    <div className="App">
      <div className="Card">
        <Temperature temp={temp} />
        <div className="Button-Container">
          <Button message="-" color="#A3E7FC" setTemp={setTemp} handleClick={handleDecrement}/>
          <Button message="+" color="#D33F49" setTemp={setTemp} handleClick={handleIncrement}/>          
        </div>

      </div>
    </div>
  );
}

export default App;
