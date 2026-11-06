import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Signup = () => {

  const [formData, setFormData] = useState(
    {
      username: "",
      email: "",
      password: "",
      role: ""
    }

  )

  const handleChange = (e) => {
    setFormData({
      ...formData,              // purana data rakho
      [e.target.name]: e.target.value // jis input ka naam hai uski value update karo
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Notice withCredentials: true so the cookie gets saved in the browser
      const response = await axios.post('http://localhost:3000/api/auth/register', formData, {
        withCredentials: true
      });

      console.log(response.data.message); // "User register Successfully"
      alert('Registered successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (<>
    <div className='bg-gray-700 rounded-2xl flex flex-col justify-center items-center w-100 h-80 m-auto'>
      <form onSubmit={handleSubmit} >
        <div className='flex gap-2 text-center mt-2'>username :<input name='username' className='bg-gray-700 gap-2 rounded-sm text-white' type='string' placeholder='type your username' onChange={handleChange} /></div>

        <br></br>
        <div className='flex gap-2 text-center mt-2'>email :<input name='email' className='bg-gray-700 rounded-sm text-white' type='email' placeholder='type your email' onChange={handleChange} /></div>

        <br></br>

        <div className='flex gap-2 text-center '>password : <input name='password' className='bg-gray-700 text-white rounded-sm' type='password' placeholder='type your password' onChange={handleChange} /></div>

        <br></br>

        <div className='flex gap-2 text-center'>role :  <input name='role' className='bg-gray-700 rounded-sm text-white' type="text" placeholder='user or artist' onChange={handleChange} /></div>

        <button type='submit' className='flex bg-green-600 justify-center items-center m-auto mt-5 rounded-2xl p-2'>Submit</button>

      </form>
    </div>

    <div className='flex justify-center mb-24'>
      <p className='text-white'>Already have an account? <a href='http://localhost:5173/login' className='underline text-blue-700'>Login</a></p>
    </div> </>
  )
}

export default Signup