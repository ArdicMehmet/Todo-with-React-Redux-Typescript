import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todo.todos);
    return (
        <section className="main w-full">
            <ul className="todo-list">
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} />
                    ))
                }
            </ul>
        </section>
    )
}

export default TodoList