



import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Users/Home/Home.js";
import UserLoginPage from "./Pages/Users/UserLogin/UserLoginPage.jsx";
import UserForgotPwd from "./Pages/Users/UserForgotPassword/UserForgotPwd.js";
import UserProfileEdit from "./Pages/Users/UserProfile/UserProfileEdit.jsx";
import "./App.css";
import UserReg from "./Pages/Users/UserRegistration/UserReg.js";
import ExplorePage from "./Pages/Users/Explore/Explore.jsx";
import About from './Pages/About/About.jsx';


import AdminLogin from "./Pages/Admin/AdminLogin.js";
import UserForgotPwdReq from "./Pages/Users/UserForgotPassword/UserForgotPasswordReq";
import UserForgotPwdAftrReq from "./Pages/Users/UserForgotPassword/UserForgotPwdAftrReq.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} /> */}
          <Route path="/user-reg" element={<UserReg />} />

          <Route path="/user-profile-edit" element={<UserProfileEdit />} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

          <Route path='/about' element={<About/>} />


          <Route path="/explore" element={<ExplorePage />} />

          <Route
            path="/user-forgot-password-req"
            element={<UserForgotPwdReq />}
          />
          <Route
            path="/user-forgot-password-aftr-req"
            element={<UserForgotPwdAftrReq />}
          />

          <Route path="/admin-login" element={<AdminLogin />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
