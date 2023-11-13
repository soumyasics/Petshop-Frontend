import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Users/Home/Home';
import UserLoginPage from './Pages/Users/UserLogin/UserLoginPage.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import UserProfileView from './Pages/Users/UserProfile/UserProfileView';
import UserReg from './Pages/Users/UserRegistration/UserReg.js'; 
// import UserNavbar from './Pages/Users/UserNavbar/UserNavbar.js';



function App() {
  return (
    <>
      <BrowserRouter>
      {/* <UserNavbar/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/user-reg" element={<UserReg />} />
          <Route path="/user-Prof" element={<UserProfileView />} />

        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
