import Home from './Page/Home';
import Login from '../src/Page/Login';
import Signup from '../src/Page/Signup';
import Sell from './Page/Sell';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sell' element={<Sell />} />
      </Routes>
    </div>
  )
}
export default App