import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Projects from './views/Projects'
import AboutMe from './views/AboutMe'
import Menu from './components/Menu'
import Footer from 'components/Footer'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>        
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="*" element={<div>Pagina não encontrada</div>}/>        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}