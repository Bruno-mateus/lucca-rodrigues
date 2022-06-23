import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './css/tailwind.css'
import './css/global.css'
import Corbusier from './routes/pages/Corbusier';
import Henry from './routes/pages/Henry';
import Eduardo from './routes/pages/Eduardo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Corbusier />} />
      <Route path="/henry-hobson-richardson" element={<Henry />} />
      <Route path="/eduardo-reidy" element={<Eduardo />} />
    </Routes>
  </BrowserRouter>
)
