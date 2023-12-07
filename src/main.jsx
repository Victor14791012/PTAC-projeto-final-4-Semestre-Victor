// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Detalhe from './Detalhe'
import Destaque from './Destaque'
import Registro from './Registro'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhe/:id" element={<Detalhe />}></Route>
        <Route path="/destaque" element={<Destaque />} />
       
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
