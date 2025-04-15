import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Uselogin from '../../hooks/Uselogin'

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {loading,logins}=Uselogin();
    const handleSubmit = async(e) => {
        e.preventDefault()
        await logins({username,password});
    }

  return (
    <div className='min-w-96 flex flex-col items-center justify-center  mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md text-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 '>
                 Login
                 <span className='text-blue-500'>ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit} >
                <div>
                <label className='label p-2' >
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter Username' className='w-full input input-bordered h-10 bg-gray-800' />
                </div>
                <div>
                <label className='label p-2' >
                    <span className='text-base label-text'>Password</span>
                </label>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter password' className='w-full input input-bordered h-10 bg-gray-800' />
                </div>
                <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-3 text-black inline-block'>
                    Don't have an account? 
                </Link>
                <div>
                    <button className='btn btn-block btn-soft btn-md mt-2 '>{ loading? <span className='loading loading-spinner'></span> :"Login" }</button>
                </div>
             
            </form>

        </div>
        
    </div>
  )
}

export default Login