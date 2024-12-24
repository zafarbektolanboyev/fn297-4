import React from 'react'
import { useNavigate } from 'react-router-dom'

function AvatarCustomer() {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/textEditor')
  }
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-white text-center'>Avatar Customer</h1>
      <button className="mt-[50px] w-[350px] mx-auto p-[15px] rounded-md text-white bg-blue-500" onClick={handleClick}>Avatar Customer</button>
    </div>
  )
}

export default AvatarCustomer
