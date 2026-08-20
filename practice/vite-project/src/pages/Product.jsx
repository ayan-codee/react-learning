import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='flex p-4 flex-col'>
        <h1 className='text-5xl text-black bg-green-500'>Collections</h1>
        <div className='flex gap-4 p-3'>
        <Link to='/product/men'>mens collections</Link>
        <Link to='/product/women'>womens collections</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product