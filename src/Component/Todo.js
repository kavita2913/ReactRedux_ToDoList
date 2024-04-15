import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState(' ');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch()


    return (
        <div className='main_div'>
            <div className='center_div'>
                <figure>
                    <figcaption className='headingList'>ToDo List</figcaption>
                </figure>

                <div className='addItems'>
                    <input type='text' placeholder='Add an Item' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                    <button className='newButton' onClick={() => dispatch(addTodo(inputData), setInputData(''))} >+</button>
                </div>
                <div className='showItem'>
                    {
                        list.map((elem) => {
                            return (
                                <div className='eachItem' key={elem.id}>
                                    <input type="checkbox" />
                                    <h3>{elem.data}</h3>
                                    <div className='todo-btn'>
                                        <i className='fas fa-trash-alt delete' title='delete item' onClick={() => dispatch(deleteTodo(elem.id))} ></i>
                                    </div></div>
                            )
                        })
                    }
                </div>
                <div className='checkList'>
                    <button className='effect' data-sm-link-text='remove All' onClick={()=> dispatch(removeTodo())} >
                    <span>Remove all</span></button>
                </div>

            </div>

        </div>
    )
}

export default Todo
