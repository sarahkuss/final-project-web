
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './scenes/Homepage';
import Learn from './scenes/Learn';
import GetInvolved from './scenes/GetInvolved';
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import ConservationNavbar from './components/ConservationNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [organizations, setOrganizations] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    if(!user){
      const oldUser = JSON.parse(localStorage.getItem("user"))
      if(oldUser) {setUser(oldUser)}
    } else {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }, [user])

  return (
    <>
    <BrowserRouter>
    <ConservationNavbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Homepage organizations={organizations} setOrganizations={setOrganizations} user={user} setUser={setUser} />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/getinvolved' element={<GetInvolved />} />
        <Route path='/login' element={<Login setUser={setUser} user={user}/>} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
