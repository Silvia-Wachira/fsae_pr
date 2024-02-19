import React from 'react'
import Logo from '../../assets/logo/pantherlogo.png'

const LoginPage = () => {
  return (
      
        <div className='flex h-screen '>
            <div className='h-full  flex-1 hidden p-5 lg:flex flex-col items-center justify-center bg-purple-900'>
                <img src={Logo} alt='Logo' className='h-[40%]'  />
                <h1 className='bold text-3xl text-white'>Panther Motor sport</h1>
            </div>
            <div className=' flex-1 h-full flex items-center justify-center p-2 bg-[#f5f3f5]'>
                <div className='w-100 h-[300px] p-5  shadow rounded md:w-[400px] bg-white'>
                    <div className='flex flex-col'>
                        <label className='font-medium'>Email </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-medium'>Password </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your password'
                        />
                    </div>
                    <button className=' bg-purple-900 text-white  rounded p-2 my-3'>Login</button>
                    <div>
                        <small className='text-gray-400 text-[11px]'>Don't have an account? <a>Register</a></small>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default LoginPage

