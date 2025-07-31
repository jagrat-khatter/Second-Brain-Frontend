import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button.tsx'
import {PlusIcon} from './icons/PlusIcon.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={()=>window.open("https://codeforces.com/ratings/organization/3281")} text={"Share Brain"} variant={"secondary"} size={"sm"} startIcon={<PlusIcon />} rounded={"xl"} />
    </>
  )
}

export default App
