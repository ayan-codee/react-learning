import React, { useState } from 'react'

const App = () => {
  
  
  const [title, settitle] = useState('');
  const [desc, setdesc] = useState('');
  
  const [tasks, settasks] = useState([]);
  const formsubmission = (e) => {
    e.preventDefault();
    const tasklist = [...tasks]
    tasklist.push({ title, desc })
    settasks(tasklist)

    settitle('');
    setdesc('');

  }

  const deleteNote = (idx)=>{
    const tasklist = [...tasks];
    tasklist.splice(idx,1);
    settasks(tasklist)
    console.log(tasks[idx])
  }
  return (
    <div className='h-screen lg:flex w-1/1 gap-6.5 p-6'>
      <form className=' md:w-full w-full flex flex-col items-start gap-3'
        onSubmit={e => formsubmission(e)}
      >
        {/* first input  title of task*/}
        <input type="text" placeholder='title please'
          className='p-2 border-2 w-full border-amber-50'
          value={title}
          onChange={e => settitle(e.target.value)}
        />
        {/* sec input text area */}
        <textarea placeholder='enter you task desc...'
          value={desc}
          onChange={e => setdesc(e.target.value)}
          className='p-2 border-2 w-full border-amber-50 h-1/4'
        />
        <button className='p-2 active:bg-gray-300 border-2 w-full border-amber-50 bg-amber-50 text-black'>submit task</button>
      </form>

      <div className='w-full md:w-full flex flex-col gap-3 pt-10 md:pt-0 '>
        <h2 className='text-5xl'>Your Notes</h2>
        <div className='flex flex-wrap gap-2'>
          {tasks.map((elem, idx) => {
            return <div key={idx} className='w-50 p-2 h-60 bg-amber-50 relative rounded-[6px]'>
              <h1 className='text-black leading-5.5 font-bold text-2xl mb-2 '>{elem.title}</h1>
              <p className='text-gray-500'>{elem.desc}</p>
              <button className='p-3 bg-red-500 text-amber-50 absolute bottom-3 left-3'
              onClick={()=>{
                deleteNote(idx)
              }}
              >delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App