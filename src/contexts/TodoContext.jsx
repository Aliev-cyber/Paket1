import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import {API} from '../utils/consts'

 export const  todoContext = createContext();


 export function useTodoContext(){
    return useContext(todoContext);
 }


const TodoContext = ({children}) => {
    const [todos,setTodos] = useState([])
    const [oneContact, setOneContact] = useState(null);

async function getTodos(){
    const {data} = await axios.get(API)
    setTodos(data);
}

async function addTodo(newTodo){
    const {data} = await axios.post(API, newTodo);
    console.log(data);
   getTodos();
}

async function deleteTodo(id){
    await axios.delete(`${API}/${id}`);
    getTodos();
}

async function getOneTodo(id){
    const {data} = await axios.get(`${API}/${id}`)
    setOneContact(data);
}
async function editTodo(id,newData){
    await axios.patch(`${API}/${id}`,newData);
    getTodos();
}

async function getOneContact(id) {
    const { data } = await axios.get(`${API}/${id}`);
    setOneContact(data);
  }

  async function editContact(id, newData) {
    await axios.patch(`${API}/${id}`, newData);
  }
    const value ={
        todos,
        oneContact,
        getTodos,
        addTodo,
        deleteTodo,
        getOneTodo,
        editTodo,
        getOneContact,
        editContact,
        setOneContact,
        
    };
  return (
    <todoContext.Provider value={value}>{children}</todoContext.Provider>
  )
}

export default TodoContext