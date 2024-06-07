import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"

import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import Login from "./Pages/Login"



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/sign-in" element={<Login/>}/>
     <Route path="/Sign-up" element={<SignUp/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/profile" element={<Profile/>}/>

    </Routes>
    
    </BrowserRouter>
  )
}

