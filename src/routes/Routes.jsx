import Home from '../pages/Home'
import Service from '../pages/Service'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import DocterDetails from '../pages/Doctors/DocterDetails'
import Docters from '../pages/Doctors/Docters'
import {Routes, Route } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
        <Route path="/" elemnt={<Home/>}/>
        <Route path="home" elemnt={<Home/>}/>
        <Route path="doctors" element={<Docters/>}/>
        <Route path="docterDetalis" element={<DocterDetails/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="contact" element={<Contact/>}/>


        

    </Routes>
  )
}

export default Routers