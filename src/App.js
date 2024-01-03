import React from 'react'
import Home from './Page/Home'
import Login from '../src/Page/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
export default App