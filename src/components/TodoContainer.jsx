import { useState } from "react";
import { TodoForm } from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashBoard from "./TodoDashBoard";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

export const TodoContainer = () => {
   const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState('123');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('handleSubmit');

    if(!todoText.trim()){
      return;
    }

    // console.log("todoText :>> ", todoText, todoText.length);

    setTodos([{id: crypto.randomUUID(), text: todoText}, ...todos]);

    setTodoText('');
  }

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }
  
  const handleDelete = (id) => {
    // todo.id가 내가 찾는 id와 같지 않을 때 true를 반환하여 그대로 남겨둠
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? {...todo, completed: !todo.completed} : todo;
    });

    setTodos(updatedTodos);
  }
    return (
        <>
            <div className="">
              <TodoDashBoard />
               <TodoForm handleSubmit={handleSubmit} todoText={todoText} handleChangeTodoText={handleChange}/>
               <TodoList todos={todos} handleToggleCompleted={handleToggleCompleted} handleDelete={handleDelete}/>
            </div>
        </>
    );
}