import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Users/Home/Home.js';
import UserLoginPage from './Pages/Users/UserLogin/UserLoginPage.jsx';
import './App.css';
import UserReg from './Pages/Users/UserRegistration/UserReg.js';
import UserForgotPwd from './Pages/Users/UserForgotPassword/UserForgotPwd.js'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/user-reg" element={<UserReg />} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
