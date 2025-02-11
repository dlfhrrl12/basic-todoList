import styled from "styled-components";
import { ActionButton as SubmitButton } from "./TodoItem";
import {  useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');
    const { todos, setTodos} = useContext(TodoContext);
    
    const handleChange = (e) => {
        setTodoText(e.target.value)
    }
    
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
    
    return (
        <>
            <TodoFormWrapper onSubmit={handleSubmit}>
                <TodoFormInput type="text" value={todoText} onChange={handleChange} placeholder="할 일을 입력하세요." />
                <SubmitButton type="submit" $bgColor="#582be6">제출하기</SubmitButton>
            </TodoFormWrapper>
        </>
    );
}

const TodoFormWrapper = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`

const TodoFormInput = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: white;
    flex: 1;
    &::placeholder{
        color: #aaa;
    }
    &:focus{
        border-color: #582be6;
        outline: none;
    }
`


export default TodoForm;