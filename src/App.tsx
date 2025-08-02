import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button.tsx'
import {PlusIcon} from './icons/PlusIcon.tsx'
import {ShareIcon} from './icons/shareIcon.tsx'
import './App.css'
import { Card } from './components/Card.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={()=>window.open("https://codeforces.com/ratings/organization/3281")} text={"Share Brain"} variant={"secondary"} size={"sm"} startIcon={<ShareIcon size={'md'} strokeWidth={3.5}/>} rounded={"xl"} />
      <Button onClick={()=>window.open("")} text={'Add Content'} variant={"primary"} size={"sm"} startIcon={<PlusIcon size={"md"} strokeWidth={3.5}/>} rounded={'xl'} />
      <Card 
      url="https://www.youtube.com/watch?v=TU1HQnU_9ME"
      title="My Video"
      onShare={() => console.log('Shared!')}
      onDelete={() => console.log('Deleted!')} />
      <Card 
      url="https://x.com/CoinDCX/status/1951540469638250808"
      title="My Tweet"
      onShare={() => console.log('Shared!')}
      onDelete={() => console.log('Deleted!')} />
    </>
  ) 
}

export default App
