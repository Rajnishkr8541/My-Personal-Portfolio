import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProjectView from './pages/ProjectView'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './pages/sub-component/Footer'

function App() {
  

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/:id' element={<ProjectView/>}/>

            
          </Routes>
          <Footer/>
         < ToastContainer/>
        </Router>

      </ThemeProvider>
    </>
  )
}

export default App
