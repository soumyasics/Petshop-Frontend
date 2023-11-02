import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/home';
import LoginPage from './Pages/UserLogin/UserLoginPage.jsx';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
