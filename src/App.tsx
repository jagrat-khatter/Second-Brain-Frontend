import { useState  , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button.tsx'
import {PlusIcon} from './icons/PlusIcon.tsx'
import {ShareIcon} from './icons/shareIcon.tsx'
import './App.css'
import { Card } from './components/Card.tsx'
import { InstagramEmbed, LinkedInEmbed, PinterestEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
import { XEmbed } from 'react-social-media-embed';
import { CreateContentModal } from './components/CreateComponentModal.tsx'

function App() {
  const [count, setCount] = useState(0);
  const [open , setOpen] = useState(false);

  return (
    <>
      <CreateContentModal open={open} onClose={()=>setOpen(x=>!x)} />
      <div className='py-4 flex justify-around'>
          <Button onClick={()=>window.open("https://codeforces.com/ratings/organization/3281")} 
          text={"Share Brain"} variant={"secondary"} size={"sm"} startIcon={<ShareIcon size={'md'} 
          strokeWidth={3.5}/>} rounded={"xl"} />
          
          <Button onClick={()=>setOpen(x => !x)} text={'Add Content'} variant={"primary"} size={"sm"} 
          startIcon={<PlusIcon size={"md"} strokeWidth={3.5}/>} rounded={'xl'}/>
      </div>
      <Card 
        url="https://x.com/CoinDCX/status/1951540469638250808"
        title="My tweet" />
      <Card 
        url="https://www.instagram.com/zuck/p/DI9fsHuTebe/"
        title="My tweet" />
      <Card 
        url="https://www.youtube.com/watch?v=s6-_6JlgT0c"
        title="My tweet" />
      <Card 
        url="https://www.linkedin.com/embed/feed/update/urn:li:activity:7341423091467612163/"
        title="My tweet" />
      <Card 
        url="https://open.spotify.com/track/2AUoNO8jxBWGmq0R5SbBYD"
        title="My Song" />
        <Card 
        url="https://www.reddit.com/r/codeforces/"
        title="Reddit Post" />
    </>
  ) 
}

export default App
