import React from 'react'
import{Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import './index.css';
import Home from './pages/Home'
import Register from './pages/Register'
import DeleteUser from './pages/DeleteUser'
import EditUser from './pages/EditUser'
import ShowUser from './pages/ShowUser'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register/' element={<Register/>}/>
      <Route path='/user/:id' element={<ShowUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
      <Route path='/delete/:id' element={<DeleteUser/>}/>
    </Routes>
  );
};

export default App