import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShoppingList() {
  const [text, setText] = useState('');
  const navigate = useNavigate()

  function copy() {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Text copied successfully!');
      })
      .catch(() => {
        toast.error('Failed to copy text!');
      });
  }
  function handleClick(){
    navigate('/avatarcustomer')
  }

  return (
    <div className='w-[400px] p-[12px] mx-auto rounded-md border'>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to copy"
        className='w-[300px] p-[15px] rounded-md'
      />
      <input type="button" className='p-[15px] text-white text-lg bg-blue-500 rounded-md' value="Copy" onClick={copy} />
      <br />
      <br />
      <input type="text" className='w-[300px] p-[15px] rounded-md'  placeholder='Paste text!'/>
      <ToastContainer />
      <button className="mt-[50px] w-[350px] mx-auto p-[15px] rounded-md text-white bg-blue-500" onClick={handleClick}>Avatar Customer</button>
    </div>
  );
}

export default ShoppingList;
