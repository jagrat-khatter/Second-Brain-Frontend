import { useState  , useRef} from 'react'

import './App.css'
import { Card } from './components/Card.tsx'
import { CreateContentModal } from './components/CreateComponentModal.tsx'
import { SideBar } from './components/Sidebar.tsx'
import { Dashboard } from './pages/dashboard.tsx'
import { Signup } from './pages/signup.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './pages/signin.tsx';
import { Twitter } from './pages/twitter.tsx'
import { Youtube } from './pages/youtube.tsx'
import { LinkedIn } from './pages/linkedin.tsx'
import { Spotify } from './pages/spotify.tsx'
import { Instagram } from './pages/instagram.tsx'
import { Facebook } from './pages/facebook.tsx'
import { Pinterest } from './pages/pinterest.tsx'
import { Reddit } from './pages/reddit.tsx'
import { Home } from './pages/home.tsx'
import { NotFound } from './pages/notfound.tsx'

function App() {
  const [count, setCount] = useState(0);
  const [open , setOpen] = useState(false);


  return (<BrowserRouter>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/dashboard' element={<Dashboard />} >
                <Route path='/dashboard/twitter' element={<Twitter />} />
                <Route path='/dashboard/linkedin' element={<LinkedIn />} />
                <Route path='/dashboard/youtube' element={<Youtube />} />
                <Route path='/dashboard/spotify' element={<Spotify />} />
                <Route path='/dashboard/instagram' element={<Instagram />} />
                <Route path='/dashboard/facebook' element={<Facebook />} />
                <Route path='/dashboard/pinterest' element={<Pinterest />} />
                <Route path='/dashboard/reddit' element={<Reddit />} />
                <Route path='/dashboard' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Route>

            </Routes>
          </BrowserRouter>)
    
}
// when there are shared components then we use nested routing 

export default App
