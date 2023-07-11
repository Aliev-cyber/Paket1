import React from 'react'
import { Button,ListGroup } from 'react-bootstrap';
import {useTodoContext} from '../contexts/TodoContext'
import {useNavigate} from 'react-router-dom'

const TodoItem = ({item}) => {
    const {deleteTodo} =useTodoContext();
    const navigate =useNavigate();
  return (
    <ListGroup.Item>{item.name} {item.surname} {item.phone}
    <Button onClick={()=> deleteTodo(item.id)} variant='primary' className='mx-2'>Delete</Button>
    <Button onClick={()=> navigate(`/edit/${item.id}`)} variant='dark'>Edit</Button>
    </ListGroup.Item>  
  )
}

export default TodoItem