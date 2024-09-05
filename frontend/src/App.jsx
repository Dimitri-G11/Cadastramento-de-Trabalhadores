
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About'
import ProtectedRoutes from './components/ProtectedRoutes'                                                                                                                                                                                                                                              
import PasswordResetRequest from './components/PasswordResetRequest'
import PchangePassword from './components/PchangePassword'
import Create from './Workers/Create'
import Edit from './Workers/Edit'
import Delete from './Workers/Delete'

function App() {
  const location=useLocation();
  const noVarbar=location.pathname==="/register" || location.pathname==="/" || location.pathname.includes("password");


  return (
    <>
        {
          noVarbar?
           <Routes>    
             <Route  path='/' element={<Login/>} />
             <Route  path='/register' element={<Register/>}/>
             <Route  path='/request/password_reset' element={<PasswordResetRequest/>}/>
             <Route  path='/password-reset/:token' element={<PchangePassword/>}/>

           </Routes>

           :

            <Navbar
            content={
              <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route  path='/home' element={<Home/>} />
                    <Route  path='/create' element={<Create/>} />
                    <Route  path='/about' element={<About/>}/>
                    <Route  path='/home/edit/:id' element={<Edit/>}/>
                    <Route  path='/home/delete/:id' element={<Delete/>}/>
                </Route>
              </Routes> }/> 
        }

      </>
  )
}

export default App
