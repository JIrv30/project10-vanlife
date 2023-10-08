import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail'
import Layout from './components/Layout';

import './App.css'
import './server'




function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


