import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'

const App = () => {
  return (
    <div>
      <nav className='w-full py-4 px-5 bg-gray-200 flex items-center justify-between'>
        <h1 className='text-2xl'>hello guys</h1>
        <ul className='flex gap-5'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App