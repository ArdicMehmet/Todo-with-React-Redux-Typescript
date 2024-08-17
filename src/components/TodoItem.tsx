import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TodoItemProps } from '../interfaces/todo'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { deleteTodo, setTodoId, setInputText, setComplatedTodo } from '../features/todoSlice';
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
    const { id, work, completed } = todo;
    const dispatch: AppDispatch = useDispatch();
    function handleUpdate(id: TodoIdType, text: string): void {
        dispatch(setTodoId(id));
        dispatch(setInputText(text));
    }
    return (
        <li key={id} className={completed ? "completed" : ""} >
            <div className="view flex justify-between items-center gap-5">
                <div>
                    <input id={`${id}`} className="toggle" type="checkbox" data-id={id} checked={completed} onClick={_ => dispatch(setComplatedTodo(id))} />
                    <label htmlFor={`${id}`}>{work}</label>
                </div>
                <div className='flex gap-5 px-6'>
                    <CiEdit size={20} onClick={_ => handleUpdate(id, work)} className="hover:text-green-600 hover:cursor-pointer transition-colors" />
                    <MdDeleteOutline className='hover:text-red-600 hover:cursor-pointer transition-colors duration-300' onClick={_ => dispatch(deleteTodo(id))} size={20} />
                </div>
            </div>
        </li>
    )

}

export default TodoItem

