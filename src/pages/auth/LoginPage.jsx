import React, { useState } from 'react'
import Logo from '../../assets/logo/pantherlogo.png'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [formData, setFormData] = useState(
        { email:" ", password: " "})

    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData, 
                [event.target.name] : event.target.value
            }
        })
    }
 
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }

    return (
      
        <div className='flex h-screen '>
            <div className='h-full  flex-1 hidden p-5 lg:flex flex-col items-center justify-center bg-purple-900'>
                <img src={Logo} alt='Logo' className='h-[40%]'  />
                <h1 className='bold text-3xl text-white'>Panther Motor sport</h1>
            </div>
           
            <form onSubmit={handleSubmit} className=' flex-1 h-full flex items-center justify-center p-2 bg-[#f5f3f5]'>
                <div className='w-100 h-[300px] p-5  shadow rounded md:w-[400px] bg-white'>
                <h1 className='font-bold text-[25px] '>Login</h1>

                    <div className='flex flex-col'>
                        <label className='font-medium'>Email </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your email'
                            type='Email'
                            onChange={handleChange}
                            name='email'
                            value={formData.email}
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-medium'>Password </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your password'
                            type='password'
                            onChange={handleChange}
                            name='password'
                            value={formData.password}
                        />
                    </div>
                    <button className=' bg-purple-900 text-white  rounded p-2 my-3'>Login</button>
                    <div className='flex justify-between'>
                        <small className='text-gray-400 text-[11px]'>Don't have an account? </small>
                        <Link className='text-[11px] cursor-pointer' to='/register' >Register</Link>
                    </div>
                </div>
            </form>
        </div>
    
  )
}

export default LoginPage

