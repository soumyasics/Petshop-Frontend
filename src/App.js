import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Users/Home/Home.js';
import UserLoginPage from './Pages/Users/UserLogin/UserLoginPage.jsx';
import UserForgotPwd from './Pages/Users/UserForgotPassword/UserForgotPwd.js'
import UserProfileEdit from './Pages/Users/UserProfile/UserProfileEdit.jsx';
import './App.css';
import UserReg from './Pages/Users/UserRegistration/UserReg.js';

import AdminLogin from './Pages/Admin/AdminLogin.js';
import UserForgotPwdReq from './Pages/Users/UserForgotPassword/UserForgotPasswordReq';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/user-reg" element={<UserReg />} />
          <Route path="/user-profile-edit" element={<UserProfileEdit/>} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
