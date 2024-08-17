import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addTodo, updateTodo, setInputText, setTodoId } from '../features/todoSlice';

const TodoInput: React.FC = () => {
    const inputText = useSelector((state: RootState) => state.todo.inputText);
    const selectedTodoId = useSelector((state: RootState) => state.todo.selectedTodoId);
    const dispatch: AppDispatch = useDispatch();
    function handleKeyDown(e: any): void {
        if (e.key === 'Enter' && !selectedTodoId) {
            dispatch(addTodo(inputText));
            clearText();
        }
        if (e.key === 'Enter' && selectedTodoId) {
            dispatch(updateTodo({ id: selectedTodoId, work: inputText }));
            clearText();
            dispatch(setTodoId(null));
        }
    }
    function clearText(): void {
        dispatch(setInputText(''));
    }
    return (
        <header className="header w-full">
            <h1>Todos</h1>
            <input type="text" className="new-todo" onChange={e => dispatch(setInputText(e.currentTarget.value))} value={inputText} onKeyDown={handleKeyDown} placeholder="What needs to be done?" />
        </header>


    )
}

export default TodoInput