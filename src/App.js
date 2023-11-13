import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLoginPage from "./Pages/Users/UserLogin/UserLoginPage.jsx";
import UserForgotPwd from "./Pages/Users/UserForgotPassword/UserForgotPwd.js";
import UserProfileEdit from "./Pages/Users/UserProfile/UserProfileEdit.jsx";
import "./App.css";
import UserReg from "./Pages/Users/UserRegistration/UserReg.js";
import ExplorePage from "./Pages/Users/Explore/Explore.jsx";
import About from "./Pages/About/About.jsx";

import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin.js";
import UserForgotPwdReq from "./Pages/Users/UserForgotPassword/UserForgotPasswordReq";
import UserForgotPwdAftrReq from "./Pages/Users/UserForgotPassword/UserForgotPwdAftrReq.js";

import PetShopLogin from "./Pages/PetShop/PetShopLogin/PetShopLogin.jsx";

import UserHome from "./Pages/Users/UserHome/UserHome.js";
import CommonNavbar from "./Pages/Common/CommonNavbar.js";
import PetShopRegistration from "./Pages/PetShop/PetShopReg/PetShopReg.jsx";
import AdminUsers from "./Pages/Admin/AdminViewAllUsers/AdminUsers.js";

function App() {
  let imgUrl="http://localhost:4000"
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Common Routes */}

          <Route path="/" element={<UserHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/c-navbar" element={<CommonNavbar />} />
          {/* User Routes */}
          <Route path="/user/login" element={<UserLoginPage />} />

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

          <Route path="/petshop/signup" element={<PetShopRegistration />} />
          <Route path="/petshop/login" element={<PetShopLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-all-users" element={<AdminUsers imgUrl={imgUrl}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
