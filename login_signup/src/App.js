import './App.css';
import NavBar from './Common/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterContainer from './Container/CounterContainer';
import LoginContainer from './Container/LoginContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <CounterContainer /> */}
      <Routes>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="*" element={<div>Wrong Path found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
