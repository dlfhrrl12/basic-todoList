import { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { SAMPLE_TODOS } from "../constants/sample-todos";



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