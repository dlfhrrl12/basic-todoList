
import styled from 'styled-components';
import  TodoItem  from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';




function TodoList() {
  const {todos} = useContext(TodoContext);
  return (
    <TodoListSection> 
      <TodoListHeader>Tasks</TodoListHeader> 
    <TodoContent>
      {todos.map(({id, text, completed}) => (
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
