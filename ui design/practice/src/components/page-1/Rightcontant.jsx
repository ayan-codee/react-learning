import React from 'react'
import Card from './card'

const Rightcontant = () => {
    const user = [
        {img:'https://images.unsplash.com/photo-1785788684002-f500e756047d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1782178394534-63204f8b83a4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {img:'https://images.unsplash.com/photo-1785828642909-676851fe3db2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
    ]
  return (
    <div className='w-2/3 flex gap-5'>
        {user.map((e)=>{
           return <Card img={e.img}/>
        })}
    </div>
  )
}

export default Rightcontant