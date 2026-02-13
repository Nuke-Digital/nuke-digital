'use client'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Impressum from "./pages/Impressum.tsx"
import Navbar from "./components/Navbar.tsx"

export default function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="/datenschutz" element={<Datenschutz/>}/>*/}
        <Route path="/impressum" element={<Impressum/>}/> 
      </Routes>
    </>
  )
}
