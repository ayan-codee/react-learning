import React, { useState } from 'react'
import axios from 'axios'

const api = () => {

    const [userData, setuserData] = useState([])

   async function showData(){
        const responce = await axios.get('https://picsum.photos/v2/list');
        console.log(responce.data)
        setuserData(responce.data);
    }
  return (
    <>
    <button className='bg-amber-50 text-black text-2xl m-5 p-5'
    onClick={showData}
    >click me</button>
    {userData.map(function(elem,idx){
        return <h2>{elem.author} {idx}</h2>
    })}
    </>
  )
}

export default api