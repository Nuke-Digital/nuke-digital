'use client'

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Impressum from "./pages/Impressum.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import ReactLenis, { type LenisRef } from "lenis/react"
import { useEffect, useRef } from "react"
import { cancelFrame, frame } from "framer-motion"

export default function App() {

  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <div>
      <ReactLenis root />
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
