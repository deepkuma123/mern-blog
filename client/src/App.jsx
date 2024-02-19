import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
const Main = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Main