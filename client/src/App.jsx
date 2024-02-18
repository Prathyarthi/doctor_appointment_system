import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
import PublicRoutes from './components/PublicRoutes'
import Layout from './components/Layout'

function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading && (
          <div className='spinner-parent'>
            <div className="spinner-border" role="status">
            </div>
          </div>
        )}
        <Routes>
          <Route path='/signup' element={<PublicRoutes> <Signup /></PublicRoutes>} />
          <Route path='/signin' element={<PublicRoutes><Signin /></PublicRoutes>} />
          <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path='/layout' element={<ProtectedRoutes><Layout /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
