import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Users/UserHome/UserHome.js";
import { useEffect } from "react";
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
import AdminNabar from "./Pages/Admin/AdminNavbar/AdminNavbar.js";
import UserHome from "./Pages/Users/UserHome/UserHome.js";
import CommonNavbar from "./Pages/Common/CommonNavbar.js";
import PetShopRegistration from "./Pages/PetShop/PetShopReg/PetShopReg.jsx";
import AdminUsers from "./Pages/Admin/AdminViewAllUsers/AdminUsers.js";
import PetShopAddPet from "./Pages/PetShop/AddPet/PetShopAddPet.jsx";
import TestComponent from "./Pages/PetShop/PetShopReg/test.jsx";
import AdminPetProfile from "./Pages/Admin/AdminPetProfile/AdminPetProfile.js";

import AdminViewAllShops from "./Pages/Admin/AdminViewAllShops/AdminViewAllShops.js";
import AdminViewAllPet from "./Pages/Admin/AdminViewAllPets/AdminViewAllPet.js";
import AdminViewEnquiries from "./Pages/Admin/AdminEnquiries/AdminViewEnquiries.js";
import ShopMoreInfo from "./Pages/ShopMoreInfo/ShopMoreInfo.jsx";
import PetMoreInfo from "./Pages/PetMoreInfo/PetMoreInfo.jsx";

import NavbarUpdated from "./Pages/Common/NavbarUpdated/NavbarUpdated.jsx";
import ShopForgotPwd from "./Pages/PetShop/ShopForgotPwd/ShopForgotPwd.js";
import ShopResetPwd from "./Pages/PetShop/ShopForgotPwd/ShopResetPwd.js";
import ShopForgotPwdSendMail from "./Pages/PetShop/ShopForgotPwd/ShopForgotPwdSendMail.js";

import AddPetHome from "./Pages/PetShop/AddPetHome/AddPetHome.js";
import AddAccessories from "./Pages/PetShop/AddAccessories/AddAccessories.js";
import AddFood from "./Pages/PetShop/AddFood/AddFood.js";
import PetShopHome from "./Pages/PetShop/PetShopHome/PetShopHome.js";
import PetShopViewAllPet from "./Pages/PetShop/PetShopViewPets/PetShopViewAllPet.js";
import UserWishlist from "./Pages/Wishlist/UserWishlist.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard.js";

import PetShopNav from "./Pages/PetShop/PetShopNav/PetShopNav.js";
import PetShoNav from "./Pages/PetShop/PetShopNav/PetShopNav.js";
import PetshopEditPet from "./Pages/PetShop/PetShopEditPet/PetshopEditPet.js";
import ShopViewAccessories from "./Pages/PetShop/ShopViewAccessories/ShopViewAccessories.js";
import ShopEditAccessories from "./Pages/PetShop/ShopViewAccessories/ShopEditAccessories.js";
import ShopEditFood from "./Pages/PetShop/ShopViewFood/ShopEditFood.js";
import ShopViewFood from "./Pages/PetShop/ShopViewFood/ShopViewFood.js";
import UserOrder from "./Pages/Orders/UserOrder.jsx";
import PetShopRequest from "./Pages/PetShop/PetShopRequest/PetShopRequest.jsx";
import ShopEditPetHome from "./Pages/PetShop/ShopViewPetHomes/ShopEditPetHome.js"
import ShopViewPetHome from "./Pages/PetShop/ShopViewPetHomes/ShopViewPetHome.js";
import FoodMoreInfo from './Pages/FoodMoreInfo/FoodMoreInfo.jsx'
import HomeMoreInfo from './Pages/HomeMoreInfo/HomeMoreInfo.jsx'
import AccessoriesMoreInfo from "./Pages/AccessoriesMoreInfo/AccessoriesMoreInfo.jsx";

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
          <Route path="/user/wishlist" element={<UserWishlist />} />
          <Route path="/user/order" element={<UserOrder />} />
          <Route path="/user/explore" element={<ExplorePage />} />

          <Route
            path="/user-forgot-password-req"
            element={<UserForgotPwdReq />}
          />
          <Route
            path="/user-forgot-password-aftr-req"
            element={<UserForgotPwdAftrReq />}
          />
          <Route
            path="/petshop"
            element={[<PetShopNav imgUrl={imgUrl} />, <PetShopHome />]}
          />
          <Route path="/petshop/signup" element={<PetShopRegistration />} />
          <Route path="/petshop/login" element={<PetShopLogin />} />
          <Route
            path="/petshop/add-pet"
            element={[<PetShoNav imgUrl={imgUrl} />, <PetShopAddPet />]}
          />
          <Route
            path="/petshop/add-food"
            element={[<PetShopNav imgUrl={imgUrl} />, <AddFood />]}
          />
          <Route
            path="/petshop/add-accessories"
            element={[<PetShopNav imgUrl={imgUrl} />, <AddAccessories />]}
          />
          <Route
            path="/petshop/edit-accessories/:id"
            element={<ShopEditAccessories imgUrl={imgUrl} />}
          />

          <Route
            path="/petshop/edit-food/:id"
            element={[
              <PetShopNav imgUrl={imgUrl} />,
              <ShopEditFood imgUrl={imgUrl} />,
            ]}
          />
          <Route
            path="/petshop/view-mypetfood"
            element={[
              <PetShopNav imgUrl={imgUrl} />,
              <ShopViewFood imgUrl={imgUrl} />,
            ]}
          />

          <Route path="/petshop/more-info/:id" element={<ShopMoreInfo />} />

          <Route path="/petshop/add-pethome" element={[<PetShopNav imgUrl={imgUrl} />,<AddPetHome imgUrl={imgUrl}/>]} />
          <Route path="/petshop/view-pethome" element={[<PetShopNav imgUrl={imgUrl} />,<ShopViewPetHome imgUrl={imgUrl}/>]} />

          <Route
            path="/petshop/edit-pethome/:id"
            element={[
              <PetShopNav imgUrl={imgUrl} />,
              <ShopEditPetHome imgUrl={imgUrl} />,
            ]}
          />

          <Route path="/petshop/home" element={<PetShopHome />} />
          <Route path="/petshop/orders" element={<PetShopRequest />} />
          {/* Soumya */}
          <Route path="/petshop/forgot-pwd" element={<ShopForgotPwd />} />
          <Route
            path="/petshop/forgot-pwd-mail-send"
            element={<ShopForgotPwdSendMail />}
          />
          <Route path="/petshop/reset-pwd" element={<ShopResetPwd />} />

          <Route
            path="/petshop/view-mypets"
            element={<PetShopViewAllPet imgUrl={imgUrl} />}
          />

          <Route
            path="/petshop/editpet/:id"
            element={<PetshopEditPet imgUrl={imgUrl} />}
          />

          <Route
            path="/petshop/view-myaccessories"
            element={<ShopViewAccessories imgUrl={imgUrl} />}
          />
          <Route
            path="/petshop/view-mypets"
            element={<PetShopViewAllPet imgUrl={imgUrl} />}
          />

          {/* Anand */}
          <Route path="/pet/more-info/:id" element={<PetMoreInfo />} />

          <Route path="/navbar-updated" element={<NavbarUpdated />} />
          {/* Soumya */}
         
          <Route path="/pet/accessories-more-info/:id" element={<AccessoriesMoreInfo />} />

          <Route path="/pet/home-more-info/:id" element={<HomeMoreInfo />} />

          <Route path="/pet/petfood-more-info/:id" element={<FoodMoreInfo />} />

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-all-users"
            element={<AdminUsers imgUrl={imgUrl} />}
          />
          <Route path="/admin/pet-profile/:id" element={<AdminPetProfile />} />

          <Route path="/admin/admin-login" element={<AdminLogin />} />
          <Route path="/admin/admin-navbar" element={<AdminNabar />} />
          <Route
            path="/admin/admin-all-shops"
            element={<AdminViewAllShops imgUrl={imgUrl} />}
          />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route
            path="/admin/admin-all-users"
            element={<AdminUsers imgUrl={imgUrl} />}
          />

          <Route
            path="/admin/admin-all-pets"
            element={<AdminViewAllPet imgUrl={imgUrl} />}
          />
          <Route
            path="/admin/admin-view-enquiries"
            element={<AdminViewEnquiries />}
          />

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
