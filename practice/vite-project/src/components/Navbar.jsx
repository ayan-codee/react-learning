import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  console.log(props)
  return (
    <nav className='w-full py-4 px-5 bg-gray-200 flex items-center justify-between'>
        <h1 className='text-2xl'>hello guys</h1>
        <ul className='flex gap-5'>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/product'>product</Link>
         <Link to='/cources'>cources</Link>
        </ul>
         <h2 className='p-2 rounded bg-black text-white capitalize px-5'>{props.children[1]}</h2>
      </nav>
  )
}

export default Navbar