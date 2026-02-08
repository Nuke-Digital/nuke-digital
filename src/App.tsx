'use client'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Datenschutz from "./pages/Datenschutz.tsx"
import Impressum from "./pages/Impressum.tsx"

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/*<Route path="/datenschutz" element={<Datenschutz/>}/>*/}
        <Route path="/impressum" element={<Impressum/>}/> 
      </Routes>
    </>
  )
}
