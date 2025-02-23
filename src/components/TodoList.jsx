
import styled from 'styled-components';
import  TodoItem  from './TodoItem';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { todoClient } from '../api/todo-api';




function TodoList() {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');
  
  const  {data: todos = [], isLoading, isError} = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await todoClient.get('/');
      return response.data
    }
  })

  if(isLoading) return <p>로딩중...</p>
  if(isError) return <p>Error loading todos</p>
  
  const getFilteredTodos = (filter) => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "pending":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

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
