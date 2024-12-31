import './App.css';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import Purchases from './pages/Purchases.js';
import Settings from './Components/Settings.js';
import Budget from './Components/Budget.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import data from './data.json'


function App() {

  return (
    <div className='w-full h-screen flex justify-between'>
    <BrowserRouter>
      {/* <div className='w-auto md:w-[100]'> */}
        <Sidebar />
      {/* </div> */}
      {/* <div className='w-full flex justify-center'> */}
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path = "/login" element ={<LoginPage/>}/>
          <Route path = "/register" element ={<RegisterPage/>}/>
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/purchases" element = {<Purchases />}/>
          <Route path="/settings" element={<Settings />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<NotFoundPage />} />


        </Routes>
      {/* </div> */}
    </BrowserRouter>
    {/* <section> */}
      {/* {cards} */}
    {/* </section> */}

    </div>
  );
}

export default App;
