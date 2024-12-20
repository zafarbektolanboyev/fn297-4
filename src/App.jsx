import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TodoList from './pages/TodoList'
import ShopingList from './pages/ShopingList'
import TextEditor from './pages/TextEditor'
import AvatarCustomer from './pages/AvatarCustomer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TodoList></TodoList>}></Route>
        <Route path='/shoplist' element={<ShopingList></ShopingList>}></Route>
        <Route path='/textEditor' element={<TextEditor></TextEditor>}></Route>
        <Route path='/avatarcustomer' element={<AvatarCustomer></AvatarCustomer>}></Route>
      </Routes>
    </div>
  )
}

export default App
