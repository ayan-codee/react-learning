import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Notfound from './pages/Notfound';
import Navbar from './components/navbar';
import Product from './pages/Product';
import Men from './pages/Men';
import Women from './pages/Women';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>

        <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App