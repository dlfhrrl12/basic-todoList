import styled from 'styled-components';
import { ActionButton as SubmitButton } from './TodoItem';
import { useState } from 'react';
import { useAddTodo } from '../api/todo-api';


const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const addTodo = useAddTodo();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo.mutate(todoText, {
      onSuccess: () => setTodoText('')
    })
  };
  return (
    <>
      <TodoFormWrapper onSubmit={handleFormSubmit}>
        <TodoFormInput
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="할 일을 입력하세요."
        />
        <SubmitButton type="submit" $bgColor="#582be6">
          제출하기
        </SubmitButton>
      </TodoFormWrapper>
    </>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  flex: 1;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

export default TodoForm;
