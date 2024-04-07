import React, { useState } from 'react'
import Logo from '../../assets/logo/pantherlogo.png'
import { Link } from 'react-router-dom'


const RegisterPage = () => {
    const [formError, setFormError] = useState("")

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    function handleChange(event){
        setFormData(prevForm => {
            return{
                ...prevForm,
                [event.target.name] : event.target.value
            }
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        validatePasswords()
        // console.log(formData.password)
    }
    
    function validatePasswords(){
        if (formData.password !== formData.repeatPassword){
            console.log(`${formData.password}` , `${formData.repeatPassword}`)
           setFormError("Passwords do not match")
        }
    }

    function validatePasswordLength(){
        if (formData.password.length <= 8){
            setFormError("Password should be a minimum of 8 characters")
        }
    }

    function clearPassword(){
        setFormError("")
    }

  return (
      
        <div className='flex h-screen '>
            <div className='h-full  flex-1 hidden p-5 lg:flex flex-col items-center justify-center bg-purple-900'>
                <img src={Logo} alt='Logo' className='h-[40%]'  />
                <h1 className='bold text-3xl text-white'>Panther Motor sport</h1>
            </div>
           
            <form onSubmit={handleSubmit} className=' flex-1 h-full flex items-center justify-center p-2 bg-[#f5f3f5]'>
                <div className='w-100 h-[500px] p-5  shadow rounded md:w-[450px] bg-white'>
                    <h2 className='font-bold text-[25px]'>Register</h2>
                    <div className='flex flex-col'>
                        <label className='font-medium'>Full Name </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your name'
                            type='text'
                            onChange={handleChange}
                            name='fullName'
                            value={formData.fullName}
                        />
                    </div>
                    <div className='flex flex-col '>
                        <label className='font-medium'>Email </label>
                        <input
                            className='border rounded p-2'
                            placeholder='Enter your Email'
                            type='email'
                            onChange={handleChange}
                            name='email'
                            value={formData.email}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-medium'>Password </label>
                        <input
                            className='border rounded p-2'
                            placeholder='********** '
                            type='password'
                            onChange={handleChange}
                            name='password'
                            value={formData.password}
                            onClick={clearPassword}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-medium'>Repeat Password </label>
                        <input
                            className='border rounded p-2'
                            placeholder='**********'
                            type='password'
                            onChange={handleChange}
                            name='repeatPassword'
                            value={formData.repeatPassword}
                            onClick={validatePasswordLength}
                        />
                        {formError ?  
                        <div className='text-red-400 text-center'>
                            <small >{formError}</small>
                        </div>
                        : null}
                    </div>
                    <div className=''>
                        <button className=' bg-purple-900 text-white rounded p-2 my-3 w-[100%]'>Register</button>
                    </div>
                    <div className='flex justify-between'>
                        <small className='text-gray-400 text-[11px]'>Already have an account?</small>
                        <Link className='text-[11px] cursor-pointer' to='/login' >login</Link>
                    </div>
                </div>
            </form>
        </div>
    
  )
}

export default RegisterPage

