import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Components/Main'
import Zen from './Components/Zen'
import Tosx from './Components/Tosx'
import Header from './Components/Header'
import Fotter from './Components/Fotter'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header /> */}
  {/* <Zen /> */}
      <Main />
      {/* <Tosx /> */}
      <Fotter />
    </>
  )
}

export default App
