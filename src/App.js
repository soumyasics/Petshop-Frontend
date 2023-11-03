import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Users/Home/Home';
import UserLoginPage from './Pages/Users/UserLogin/UserLoginPage.jsx';
import './App.css';
import UserReg from './Pages/Users/UserRegistration/UserReg.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/user-reg" element={<UserReg />} />

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
