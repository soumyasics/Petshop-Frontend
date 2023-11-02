import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/home';
import UserLoginPage from './Pages/UserLogin/UserLoginPage.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user-login" element={<UserLoginPage />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
