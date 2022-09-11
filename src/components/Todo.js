import React , {useState} from 'react'
import { addTodo,deleteTodo,removeTodo } from '../action/index';
import {useSelector,useDispatch} from 'react-redux';
import './todo.css';

const Todo = () => {
    const [inputData,setInputData]=useState('')
    const list = useSelector((state)=> state.todoreducer.list)
    const dispatch = useDispatch();
    const send= function(){
      dispatch(addTodo(inputData));
      setInputData('')
    }
  return (
    <>
        <div className="app">
            <h1>To Do List</h1>


            <input type="text" placeholder="New task" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
            <button className='btn_add' onClick={send}>Add</button>
            <ul>
                {
                  list.map(el =>{
                    return <li key={el.id}>{el.data} <button onClick={()=>dispatch(deleteTodo(el.id))}>Remove</button></li>
                  })
                }
            </ul>

            <button className='remove' onClick={()=> dispatch(removeTodo())}>Remove All</button>
        </div>
    </>
  )
}

export default Todo;