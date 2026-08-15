import React, { useEffect, useState,  } from 'react'

const Useeffect = () => {
    const [a, seta] = useState(0);
    const [b, setb] = useState(0);

    useEffect(function(){
        console.log('hello')
    },[a])

  return (
    <>
    <h1>A = {a}</h1>
    <h1>B = {b}</h1>
    <button className='bg-amber-50 p-3 text-black m-3 font-bold'
    onClick={()=>{
        seta(a+1)
    }}
    >change A</button>
    <button className='bg-amber-50 p-3 text-black m-3 font-bold'
    onClick={()=>{
        setb(b+1)
    }}
    >change B</button>
    </>
  )
}

export default Useeffect