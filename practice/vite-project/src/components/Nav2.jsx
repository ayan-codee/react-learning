import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Nav2 = () => {
    const navigate = useNavigate()
  return (
    <div className='flex gap-3 p-3'>
        <button className='bg-amber-400 cursor-pointer active:bg-amber-200  p-3 rounded'
        onClick={()=>{
            navigate('/')
        }}
        >return to home</button>
        <button className='bg-amber-400 active:bg-amber-200 cursor-pointer active:opacity-.5 p-3 rounded'
        onClick={()=>{
            navigate(-1)
        }}
        >Back</button>
    </div>
  )
}

export default Nav2