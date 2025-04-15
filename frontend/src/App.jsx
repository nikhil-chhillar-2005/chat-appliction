  import React from 'react';
  import Login from './pages/login/login'
  import Signup from './pages/signup/signup';
  import Home from './pages/home/home';
  import { Toaster } from 'react-hot-toast';
  import { useContext } from 'react';
  import { AuthContext } from './Context/AuthContext';

  import { Routes,Route, Navigate } from 'react-router-dom';
  const App = () => {
    const {user}=useContext(AuthContext);
    return (
      <div className='p-4 h-screen flex items-center justify-center' >
      <Routes>
        <Route path='/login' element={ user?<Navigate to="/" />:<Login/>} />
        <Route path='/signup' element={user?<Navigate to="/" />:<Signup/>} />
        <Route path='/' element={ user?<Home/>:<Navigate to="/login" />} />
      </Routes>
      <Toaster/>
    </div>
    )
  }

  export default App