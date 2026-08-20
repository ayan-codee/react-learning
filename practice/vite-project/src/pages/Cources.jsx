import React from 'react'
import { useParams } from 'react-router-dom'

const Cources = () => {
    const val = useParams()
  return (
    <div>{val.id} Cource Details</div>
  )
}

export default Cources