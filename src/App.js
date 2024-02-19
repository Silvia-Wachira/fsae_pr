import './App.css';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar.js';
import LoginPage from './pages/auth/LoginPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/login" element ={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import React from 'react'
// import Sidebar from './Components/Sidebar'

// function App() {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   )
// }

// export default App