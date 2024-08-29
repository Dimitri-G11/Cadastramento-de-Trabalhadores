
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import ProtectedRoutes from './components/ProtectedRoutes'                                                                                                                                                                                                                                              

function App() {
  const location=useLocation();
  const noVarbar=location.pathname==="/register" || location.pathname==="/";


  return (
    <>
        {
          noVarbar?
           <Routes>    
             <Route  path='/' element={<Login/>} />
             <Route  path='/register' element={<Register/>}/>
           </Routes>

           :

            <Navbar
            content={
              <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route  path='/home' element={<Home/>} />
                    <Route  path='/about' element={<About/>}/>
                </Route>
              </Routes> }/> 
        }

      </>
  )
}

export default App
