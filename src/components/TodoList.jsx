
import styled from 'styled-components';
import  TodoItem  from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useSearchParams } from 'react-router-dom';




function TodoList() {
  const {todos} = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  
  const selectedFilter = searchParams.get('filter');
  
  const getFilteredTodos = (selectedFilter) => {
    if(selectedFilter === 'completed'){
      return todos.filter((todo) => todo.completed);
    }
    
    if(selectedFilter === 'pending'){
      return todos.filter((todo) => !todo.completed);
    }
    
    return todos;
  }
  
  const filteredTodos = getFilteredTodos(selectedFilter);
  
  return (
    <TodoListSection> 
      <TodoListHeader>Tasks</TodoListHeader> 
    <TodoContent>
      {filteredTodos.map(({id, text, completed}) => (
         <TodoItem 
            key={id}
            completed={completed}
            text={text}
            id={id}
         />
      ))}
    </TodoContent>
    </TodoListSection>
  )
}
const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`

const TodoContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default TodoList
