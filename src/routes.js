import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

import Home from './views/Home'
import Header from './components/Header'
import Footer from 'components/Footer'

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>        
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}