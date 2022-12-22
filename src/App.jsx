import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Global } from './style/Global'
import { Home } from './pages/Home'

function App() {
  return (
    <Router>
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
