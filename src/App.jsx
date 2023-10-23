import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Vans from './Vans';
import VanDetail from './VanDetail'
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Dashboard';
import Income from './pages/Income';
import Reviews from './pages/Reviews';
import HostVans from './pages/HostVans'
import HostVanDetail from './pages/HostVanDetail'
import HostVanPhotos from './pages/HostVanPhotos';
import HostVanPricing from './pages/HostVanPricing'
import HostVanInfo from './pages/HostVanInfo'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import AuthRequired from './components/AuthRequired';

import './App.css'
import './server'




function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path ='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path='login'
            element={<Login />}
          />


          <Route element={<AuthRequired />}>
            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />} >
                <Route index element={<HostVanInfo />} />
                <Route path='pricing' element={<HostVanPricing />} />
                <Route path='photos' element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


