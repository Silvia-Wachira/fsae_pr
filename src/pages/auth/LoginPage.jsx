import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo/pantherlogo.png';

const LoginPage = () => {
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample users for demonstration purposes
  const users = [
    { email: 'user@example.com', password: 'password123' }, // Registered user
    // Add more users as needed
  ];

  function handleChange(event) {
    setFormData((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  function login() {
    const { email, password } = formData;

    // Check if the email exists in the users array
    const user = users.find((user) => user.email === email);

    if (user) {
      // User found, check password
      if (user.password === password) {
        // Successful login
        navigate('/'); // Navigate to the home page
      } else {
        // Incorrect password
        setFormError('Incorrect password. Please try again.');
      }
    } else {
      // User not found, navigate to the register page
      setFormError('User not found. Please register.');
      navigate('/register'); // Navigate to the register page
    }
  }

  return (
    <div className="flex h-screen">
      <div className="h-full flex-1 hidden p-0 lg:flex flex-col items-center justify-center bg-purple-900">
        <img src={Logo} alt="Logo" className="h-[110%]" />
        <h1 className="bold text-3xl text-white">Panther Motor sport</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 h-full flex items-center justify-center p-2 bg-[#f5f3f5]"
      >
        <div className="w-100 h-[300px] p-5 shadow rounded md:w-[400px] bg-white">
          <h1 className="font-bold text-[25px]">Login</h1>

          <div className="flex flex-col">
            <label className="font-medium">Email</label>
            <input
              className="border rounded p-2"
              placeholder="Enter your email"
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password</label>
            <input
              className="border rounded p-2"
              placeholder="**********"
              type="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
          </div>
          {formError && (
            <div className="text-red-400 text-center">
              <small>{formError}</small>
            </div>
          )}
          <button className="bg-purple-900 text-white rounded p-2 my-3 w-[100%]">Login</button>
          <div className="flex justify-between">
            <small className="text-gray-400 text-[11px]">Don't have an account?</small>
            <a className="text-[11px] cursor-pointer" href="/register">
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from 'react'
// import Logo from '../../assets/logo/pantherlogo.png'
// import { Link } from 'react-router-dom'

// const LoginPage = () => {
//     const [formData, setFormData] = useState(
//         { email:" ", password: " "})

//     function handleChange(event){
//         setFormData(prevFormData =>{
//             return{
//                 ...prevFormData, 
//                 [event.target.name] : event.target.value
//             }
//         })
//     }
 
//     function handleSubmit(event){
//         event.preventDefault()
//         console.log(formData)
//     }

//     return (
      
//         <div className='flex h-screen '>
//             <div className='h-full  flex-1 hidden p-0 lg:flex flex-col items-center justify-center bg-purple-900 '>
//                 <img src={Logo} alt='Logo' className='h-[110%]'  />
//                 <h1 className='bold text-3xl text-white'>Panther Motor sport</h1>
//             </div>
           
//             <form onSubmit={handleSubmit} className=' flex-1 h-full flex items-center justify-center p-2 bg-[#f5f3f5]'>
//                 <div className='w-100 h-[300px] p-5  shadow rounded md:w-[400px] bg-white'>
//                 <h1 className='font-bold text-[25px] '>Login</h1>

//                     <div className='flex flex-col'>
//                         <label className='font-medium'>Email </label>
//                         <input
//                             className='border rounded p-2'
//                             placeholder='Enter your email'
//                             type='Email'
//                             onChange={handleChange}
//                             name='email'
//                             value={formData.email}
//                         />
//                     </div>
//                     <div className='flex flex-col '>
//                         <label className='font-medium'>Password </label>
//                         <input
//                             className='border rounded p-2'
//                             placeholder='Enter your password'
//                             type='password'
//                             onChange={handleChange}
//                             name='password'
//                             value={formData.password}
//                         />
//                     </div>
//                     <button className=' bg-purple-900 text-white  rounded p-2 my-3'>Login</button>
//                     <div className='flex justify-between'>
//                         <small className='text-gray-400 text-[11px]'>Don't have an account? </small>
//                         <Link className='text-[11px] cursor-pointer' to='/register' >Register</Link>
//                     </div>
//                 </div>
//             </form>
//         </div>
    
//   )
// }

// export default LoginPage