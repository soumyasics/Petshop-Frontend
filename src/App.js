



import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import UserHome from "./Pages/Users/UserHome/UserHome.js";
import CommonNavbar from "./Pages/Common/CommonNavbar.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Common Routes */}

          <Route path="/" element={<UserHome />} />
          <Route path='/about' element={<About/>} />
          <Route path='/c-navbar' element={<CommonNavbar/>} />
          {/* User Routes */}
          <Route path="/user-login" element={<UserLoginPage />} /> 

          <Route path="/user-reg" element={<UserReg />} />

          <Route path="/user-profile-edit" element={<UserProfileEdit />} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

          


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
