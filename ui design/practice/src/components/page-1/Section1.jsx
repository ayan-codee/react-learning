import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontant from './Rightcontant'

const Section1 = () => {
  return (
    <div className='flex w-full h-[90vh]  p-10'>
        <Leftcontent/>
        <Rightcontant/>
    </div>
  )
}

export default Section1