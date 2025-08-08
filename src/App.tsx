import { useState  , useRef} from 'react'

import './App.css'
import { Card } from './components/Card.tsx'
import { InstagramEmbed, LinkedInEmbed, PinterestEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';
import { XEmbed } from 'react-social-media-embed';
import { CreateContentModal } from './components/CreateComponentModal.tsx'
import { SideBar } from './components/Sidebar.tsx'
import { Dashboard } from './pages/dashboard.tsx'
import { Signup } from './pages/signup.tsx';

function App() {
  const [count, setCount] = useState(0);
  const [open , setOpen] = useState(false);

  return (<>
   {/* <Dashboard /> */}
   <Signup />
  </>)
    
}

export default App
