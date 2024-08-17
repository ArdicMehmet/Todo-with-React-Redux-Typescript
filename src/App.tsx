import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className='todoapp'>
        <div className="flex justify-center my-20 flex flex-col justify-start items-center gap-5">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
