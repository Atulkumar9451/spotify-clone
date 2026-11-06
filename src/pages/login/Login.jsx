import React from 'react'
import { useState } from 'react'

import axios from 'axios'

const Login = () => {

  const [formData, setFormData] = useState({
    identifier: "",
    password: ""
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Button click ho gaya aur function chal pada!");
    try {
      // Notice withCredentials: true so the cookie gets saved in the browser
      const response = await axios.post('http://localhost:3000/api/auth/login', formData, {
        withCredentials: true
      });

      console.log(response.data.message); // "User register Successfully"
      alert('Logged in successfully!');
    }

    catch (error) {
      alert(error.response?.data?.message || "Login Failed")
    }

  }

  return (
    <div className='bg-gray-700 rounded-2xl flex flex-col justify-center items-center w-100 h-80 m-auto'>

      <form onSubmit={handleSubmit} >
        <div className='flex flex-col gap-2 mt-2'><p className='m-0'>username or password</p><div className='border-white'><input name='identifier' className='bg-gray-700 gap-2 rounded-sm w-48 text-white border-white' type='text' placeholder='type your username' onChange={handleChange} /></div></div>


        <br></br>

        <div className='flex flex-col gap-2 '>password <input name='password' className='bg-gray-700 text-white rounded-sm w-48' type='password' placeholder='type your password' onChange={handleChange} /></div>

        <button type='submit' className='flex bg-green-600 justify-center items-center m-auto mt-5 rounded-2xl p-2'>Login</button>

      </form>
    </div>
  )
}

export default Login