import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './Container/NavBarContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginContainer from './Container/LoginContainer';
import LoadingPage from './Component/LoadingPage';
import LandingPage from './Component/Landing';
import CreateAccount from './Container/CreateAccount';
import NoteCreationContainer from './Container/NoteCreationContainer';
import Notes from './Component/Notes';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) 
      : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/createNote" element={<NoteCreationContainer />} />
            <Route path='/notes' element={<Notes />} />
            <Route path="*" element={<div>Wrong Path found</div>} />
          </Routes>
        </BrowserRouter>
      )
      }
    </div>
  );
}

export default App;
