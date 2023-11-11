import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLoginPage from "./Pages/Users/UserLogin/UserLoginPage.jsx";
import UserForgotPwd from "./Pages/Users/UserForgotPassword/UserForgotPwd.js";
import UserProfileEdit from "./Pages/Users/UserProfile/UserProfileEdit.jsx";
import "./App.css";
import UserReg from "./Pages/Users/UserRegistration/UserReg.js";
import ExplorePage from "./Pages/Users/Explore/Explore.jsx";
import About from "./Pages/About/About.jsx";

import AdminLogin from "./Pages/Admin/AdminLogin.js";
import UserForgotPwdReq from "./Pages/Users/UserForgotPassword/UserForgotPasswordReq";
import UserForgotPwdAftrReq from "./Pages/Users/UserForgotPassword/UserForgotPwdAftrReq.js";

import PetShopLogin from "./Pages/PetShop/PetShopLogin.jsx";

import UserHome from "./Pages/Users/UserHome/UserHome.js";
import CommonNavbar from "./Pages/Common/CommonNavbar.js";

import AdminUsers from "./Pages/Admin/AdminUsers.js";

import AddPet from "./Pages/PetShop/AddPet/AddPet.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          {/* Common Routes */}

          <Route path="/" element={<UserHome />} />
          <Route path='/about' element={<About/>} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path='/c-navbar' element={<CommonNavbar/>} />
          {/* User Routes */}
          <Route path="/user-login" element={<UserLoginPage />} /> 

          <Route path="/user-reg" element={<UserReg />} />

          <Route path="/user-profile-edit" element={<UserProfileEdit />} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

          <Route path="/user-explore" element={<ExplorePage />} />


          <Route
            path="/user-forgot-password-req"
            element={<UserForgotPwdReq />}
          />
          <Route
            path="/user-forgot-password-aftr-req"
            element={<UserForgotPwdAftrReq />}
          />

          <Route path="/petshop-login" element={<PetShopLogin />} />
          <Route path="/petshop-add" element={<AddPet/>}/>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-all-users" element={<AdminUsers/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
