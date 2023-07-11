import React, { useEffect } from 'react'
import { useTodoContext } from '../contexts/TodoContext'
import {ListGroup} from 'react-bootstrap'
import TodoItem from './TodoItem'
const TodoList = () => {
    const {todos, getTodos} = useTodoContext();

    useEffect(()=>{
        getTodos();
    },[])
  return (
   <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:'20px'}}>
        <h1>Contact Book</h1>
     <ListGroup style={{marginTop:'20px'}}>
            {todos.map((item)=>(
                <TodoItem key={item.id} item ={item}/>
            ))}
      </ListGroup>
   </div>
  )
}

export default TodoList