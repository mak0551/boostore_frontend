import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/CreateBook'
import Show from './pages/ShowBook'
import Edit from './pages/EditBook'
import Delete from './pages/DeleteBook'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/books/create' element={<Create/>}/>
      <Route path='/books/details/:id' element={<Show/>}/>
      <Route path='/books/edit/:id' element={<Edit/>}/>
      <Route path='/books/delete/:id' element={<Delete/>}/>
    </Routes>
  )
}

export default App
