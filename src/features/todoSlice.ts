import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialTodo} from '../interfaces/todo';

const initialState :InitialTodo = {
  todos:[],
  inputText:'',
  selectedTodoId : null
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({id:Date.now(), work:action.payload,completed:false});
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = [...state.todos.filter(todo => todo.id !== action.payload)];
    },
    updateTodo: (state, action: PayloadAction<{id:number, work:string}>) => {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, work : action.payload.work} : todo)
    },
    setInputText : (state,action: PayloadAction<string>)=>{
      state.inputText = action.payload
    },
    setTodoId : (state, action:PayloadAction<TodoIdType>)=>{
      state.selectedTodoId = action.payload
    },
    setComplatedTodo : (state, action:PayloadAction<number>) =>{
      state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, completed : !todo.completed} : todo);
    }
  }
});

export const { addTodo, deleteTodo, updateTodo, setInputText, setTodoId, setComplatedTodo } = todoSlice.actions;

export default todoSlice.reducer;