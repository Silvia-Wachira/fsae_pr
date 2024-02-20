import './App.css';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/login" element ={<LoginPage/>}/>
        <Route path = "/register" element ={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
