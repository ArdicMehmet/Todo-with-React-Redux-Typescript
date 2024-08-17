import TodoIdType from '../types/todo'

export interface Todo {
    id: number;
    work: string;
    completed: boolean;
}

export interface TodoItemProps {
    todo:Todo;
}

export interface InitialTodo {
    todos : Array<Todo>;
    inputText : string;
    selectedTodoId: TodoIdType
}