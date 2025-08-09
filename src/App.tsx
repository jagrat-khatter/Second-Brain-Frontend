import { useState  , useRef} from 'react'

import './App.css'
import { Card } from './components/Card.tsx'
import { CreateContentModal } from './components/CreateComponentModal.tsx'
import { SideBar } from './components/Sidebar.tsx'
import { Dashboard } from './pages/dashboard.tsx'
import { Signup } from './pages/signup.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin } from './pages/signin.tsx';

function App() {
  const [count, setCount] = useState(0);
  const [open , setOpen] = useState(false);


  return (<BrowserRouter>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </BrowserRouter>)
    
}

export default App
