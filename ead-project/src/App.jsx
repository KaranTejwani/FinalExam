import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading'
import TrafficLightSimulator from './TrafficLightSimulator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TrafficLightSimulator/>
      
    </>
  )

}

export default App
