import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage"
import AddTodoPage from "../pages/AddTodoPage"
import MainLayouts from '../layouts/MainLayouts'
import EditTodoPage from '../pages/EditTodoPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route  element={<MainLayouts/>}>
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/add" element={<AddTodoPage/>}/>
        <Route path="/edit/:id" element={<EditTodoPage/>}/>
        </Route>
    </Routes>
  )
}

export default MainRoutes