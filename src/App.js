
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './scenes/Homepage';
import Learn from './scenes/Learn';
import GetInvolved from './scenes/GetInvolved';
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [organizations, setOrganizations] = useState('')

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage organizations={organizations} setOrganizations={setOrganizations}/>} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/getinvolved' element={<GetInvolved />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
