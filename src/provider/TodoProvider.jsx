import { useState } from "react";
import { TodoContext } from "../context/TodoContext";

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

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
 




 
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
           <TodoContext.Provider value={{
           todos, handleToggleCompleted, handleDelete, setTodos
           }}>
              {children}
           </TodoContext.Provider>
       </>
   );
}

export default TodoProvider;