
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrganizationList from './components/OrganizationList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [organizations, setOrganizations] = useState('')

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<OrganizationList organizations={organizations} setOrganizations={setOrganizations}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
