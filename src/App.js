import './App.css';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import Purchases from './pages/Purchases.js';
import data from './data.json'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path = "/" exact element ={<Home/>}/>
        <Route path = "/login" element ={<LoginPage/>}/>
        <Route path = "/register" element ={<RegisterPage/>}/>
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/purchases" element = {<Purchases />}/>
      </Routes>
    </BrowserRouter>
    {/* <section> */}
      {/* {cards} */}
    {/* </section> */}

    </div>
  );
}

export default App;
