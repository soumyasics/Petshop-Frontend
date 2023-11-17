import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Users/UserHome/UserHome.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserProfileView from "./Pages/Users/UserProfile/UserProfileView";
import UserReg from "./Pages/Users/UserRegistration/UserReg.js";
// import UserNavbar from './Pages/Users/UserNavbar/UserNavbar.js';

import UserLoginPage from "./Pages/Users/UserLogin/UserLoginPage.jsx";
import UserForgotPwd from "./Pages/Users/UserForgotPassword/UserForgotPwd.js";
import UserProfileEdit from "./Pages/Users/UserProfile/UserProfileEdit.jsx";
import "./App.css";
import ExplorePage from "./Pages/Users/Explore/Explore.jsx";
import About from "./Pages/About/About.jsx";

import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin.js";
import UserForgotPwdReq from "./Pages/Users/UserForgotPassword/UserForgotPasswordReq";
import UserForgotPwdAftrReq from "./Pages/Users/UserForgotPassword/UserForgotPwdAftrReq.js";

import PetShopLogin from "./Pages/PetShop/PetShopLogin/PetShopLogin.jsx";
import AdminNabar from "./Pages/Admin/AdminNavbar/AdminNavbar.js"
import UserHome from "./Pages/Users/UserHome/UserHome.js";
import CommonNavbar from "./Pages/Common/CommonNavbar.js";
import PetShopRegistration from "./Pages/PetShop/PetShopReg/PetShopReg.jsx";
import AdminUsers from "./Pages/Admin/AdminViewAllUsers/AdminUsers.js";
import PetShopAddPet from "./Pages/PetShop/AddPet/PetShopAddPet.jsx";
import TestComponent from "./Pages/PetShop/PetShopReg/test.jsx";
import AdminPetProfile from "./Pages/Admin/AdminPetProfile/AdminPetProfile.js";

import AdminViewAllShops from "./Pages/Admin/AdminViewAllShops/AdminViewAllShops.js";
import AdminViewAllPet from './Pages/Admin/AdminViewAllPets/AdminViewAllPet.js'
import AdminViewEnquiries from "./Pages/Admin/AdminEnquiries/AdminViewEnquiries.js";
import ShopMoreInfo from "./Pages/ShopMoreInfo/ShopMoreInfo.jsx";
import PetMoreInfo from "./Pages/PetMoreInfo/PetMoreInfo.jsx";
function App() {
  let imgUrl = "http://localhost:4000";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Common Routes */}

          <Route path="/" element={<UserHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/c-navbar" element={<CommonNavbar />} />
          {/* User Routes */}
          <Route path="/user/login" element={<UserLoginPage />} />

          <Route path="/user-reg" element={<UserReg />} />
          <Route path="/user-Prof" element={<UserProfileView />} />

          <Route path="/user/profile-edit" element={<UserProfileEdit />} />
          <Route path="/user-forgot-password" element={<UserForgotPwd />} />

          <Route path="/user/explore" element={<ExplorePage />} />

          <Route path="/user-forgot-password-req" element={<UserForgotPwdReq />}          />
          <Route path="/user-forgot-password-aftr-req" element={<UserForgotPwdAftrReq />} />
          {/* Anand */}
          <Route path="/petshop/signup" element={<PetShopRegistration />} />
          <Route path="/petshop/login" element={<PetShopLogin />} />
          <Route path="/petshop/add-pet" element={<PetShopAddPet />} />
          <Route path="/petshop/more-info/:id" element={<ShopMoreInfo />} />
          <Route path="/pet/more-info/:id" element={<PetMoreInfo />} />
          {/* Soumya */}

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-all-users"
            element={<AdminUsers imgUrl={imgUrl} />}
          />
          <Route path="/admin/pet-profile/:id" element={<AdminPetProfile/>} />

          <Route path="/admin/admin-login" element={<AdminLogin />} />
          <Route path="/admin/admin-navbar" element={<AdminNabar />} />
          <Route path="/admin/admin-all-shops" element={<AdminViewAllShops imgUrl={imgUrl}/>} />

          <Route path="/admin/admin-all-users" element={<AdminUsers imgUrl={imgUrl} />}/>
          
          <Route path="/admin/admin-all-pets" element={<AdminViewAllPet imgUrl={imgUrl} />}/>
          <Route path="/admin/admin-view-enquiries" element={<AdminViewEnquiries />} />

          {/* just for testing purpose will remove  */}
          <Route path="/test" element={<TestComponent />} />
          {/* This Route should be last */}
          <Route
            path="/*"
            element={<h1> Please recheck your route - 404 </h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
