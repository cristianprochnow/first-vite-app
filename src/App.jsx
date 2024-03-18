import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Header } from './components/Header';

export default function App() {
  const [counter, setCounter] = useState(0);

  function onHandlerIncreaseButton() {
    setCounter(counter + 1)
  }

  return (
    <main>
      <Header />
      
      <div>
        <button onClick={onHandlerIncreaseButton}>
          Clique-me!
        </button>
        <Counter skipOdds={true} />
        <Counter />
      </div>

      <footer>
        {counter}
      </footer>
    </main>
  )
}