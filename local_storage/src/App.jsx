import React from 'react'

const App = () => {
  // const name = localStorage.setItem('name','ayanahmed')

  let n = 'ayan';
  let a = 17;

  const name = {
    naam:n,
    age:a,
  }
  const val = localStorage.setItem('name',JSON.stringify(name))
  return (
    <div>
      hello
    </div>
  )
}

export default App