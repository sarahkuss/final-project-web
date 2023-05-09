
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './scenes/Homepage';

function App() {
  const [organizations, setOrganizations] = useState('')

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage organizations={organizations} setOrganizations={setOrganizations}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
