import styled from "styled-components";
import { ActionButton as SubmitButton } from "./TodoItem";

const TodoForm = ({handleSubmit, todoText, handleChangeTodoText}) => {
    return (
        <>
            <TodoFormWrapper onSubmit={handleSubmit}>
                <TodoFormInput type="text" value={todoText} onChange={handleChangeTodoText} placeholder="할 일을 입력하세요." />
                <SubmitButton type="submit" $bgColor="#582be6">제출하기</SubmitButton>
            </TodoFormWrapper>
        </>
    );
}

const TodoFormWrapper = styled.form`
    display: flex;
    flex-direction: row;
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