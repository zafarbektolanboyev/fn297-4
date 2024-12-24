import React from 'react'
import { useNavigate } from 'react-router-dom'

function TextEditor() {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/')
  }
  return (
    <div className='flex flex-col'>
      <h1 className='text-3xl text-white text-center'>Text Editor</h1>
      <button className="mt-[50px] w-[350px] mx-auto p-[15px] rounded-md text-white bg-blue-500" onClick={handleClick}>TodoList</button>
    </div>
  )
}

export default TextEditor
