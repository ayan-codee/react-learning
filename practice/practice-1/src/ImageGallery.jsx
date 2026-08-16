import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageGallery = () => {
    const [userData, setuserData] = useState([]);
    const [index, setindex] = useState(1)

    const userDataResponce = async ()=> {
      const  responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`); 
       setuserData(responce.data);
       console.log(responce.data)
    }
    
    let printUserData = 'no user found';

    if(userData.length > 0){
        printUserData = userData.map((elem, idx)=>{
            return <div className='bg-white rounded m-2'>
                <div className='w-50 h-50 flex  flex-wrap'>
                <img src={elem.download_url} className='h-full w-full' alt="" />
                </div>
            <h2 className='p-3 text-black'>{elem.author}</h2>
            </div>
        })
    }
 
    useEffect(()=>{
        userDataResponce()
    },[index])

  return (
    <>
<div  className='w-full flex flex-wrap'>
    {printUserData}
</div>
<div className='flex align-center justify-center  p-5'>
    <button
    style={{opacity:index > 1 ? 1 : 0.5}}
    className='bg-amber-600 p-3 text-black m-2 rounded'
    onClick={()=>{
        if(index >1){

            setindex(index-1)
        }
    }}
    >prev</button>
    
    <button className='bg-amber-600 p-3 text-black m-2 rounded'
     onClick={()=>{
      setindex(index+1)

    }}
    >next</button>
</div>
<h1 className='text-4xl bg-red-500 p-7 rounded-full fixed top-0 left-0'>{index}</h1>
    </>
  )
}

export default ImageGallery