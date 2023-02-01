import { useState } from 'react'
import Header from './components/Header';
import { Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500 h-full font-yekan' >
      <Header/>
    </div>
  );
}

export default App
