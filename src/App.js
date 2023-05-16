
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './scenes/Homepage';
import Learn from './scenes/Learn';
import GetInvolved from './scenes/GetInvolved';
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import ConservationNavbar from './components/ConservationNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [organizations, setOrganizations] = useState('')
  const [user, setUser] = useState(null)

  return (
    <>
    <BrowserRouter>
    <ConservationNavbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Homepage organizations={organizations} setOrganizations={setOrganizations} user={user} />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/getinvolved' element={<GetInvolved />} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
