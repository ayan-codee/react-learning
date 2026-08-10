import React from 'react'

const Card = (prop) => {
  return (
    <div className='h-full w-1/3 rounded-4xl overflow-hidden relative bg-green-400'>
        <img className='w-full h-full object-cover' src={prop.img} alt="" />
        <div className='h-full w-full flex flex-col justify-between absolute top-0 left-0 p-5'>
            <div className='bg-white text-black rounded-full p-3 flex items-center justify-center w-8 h-8'>1</div>
            <div>
                <p className='text-white pb-20 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium alias, totam aspernatur cum quaerat eum!</p>
                <div className='flex justify-between'>
                <button className='bg-green-500 px-5 py-2 rounded-full '>satified</button>
                <button className='bg-green-500 px-3 py-2 rounded-full '><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card