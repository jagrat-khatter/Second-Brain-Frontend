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
import { RecoilRoot } from 'recoil'

function App() {
  
  const [open , setOpen] = useState(false);


  return (<RecoilRoot>
              <BrowserRouter>
                <Routes>
                  <Route path='/signup' element={<Signup />} />
                  <Route path='/signin' element={<Signin />} />
                  <Route path='/dashboard' element={<Dashboard />}>
                    <Route index element={<Home />} />                    {/* /dashboard */}
                    <Route path='twitter' element={<Twitter />} />        {/* /dashboard/twitter */}
                    <Route path='linkedin' element={<LinkedIn />} />      {/* /dashboard/linkedin */}
                    <Route path='youtube' element={<Youtube />} />        {/* /dashboard/youtube */}
                    <Route path='spotify' element={<Spotify />} />        {/* /dashboard/spotify */}
                    <Route path='instagram' element={<Instagram />} />    {/* /dashboard/instagram */}
                    <Route path='facebook' element={<Facebook />} />      {/* /dashboard/facebook */}
                    <Route path='pinterest' element={<Pinterest />} />    {/* /dashboard/pinterest */}
                    <Route path='reddit' element={<Reddit />} />          {/* /dashboard/reddit */}
                  </Route>

                </Routes>
              </BrowserRouter>
          </RecoilRoot>)
    
}
// when there are shared components then we use nested routing 

export default App
