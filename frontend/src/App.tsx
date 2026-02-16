'use client'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Impressum from "./pages/Impressum.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"

export default function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="/datenschutz" element={<Datenschutz/>}/>*/}
        <Route path="/impressum" element={<Impressum/>}/> 
      </Routes>
      <Footer/>
    </div>
  )
}
