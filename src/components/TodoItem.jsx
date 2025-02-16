import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";
import { Link, useNavigate } from "react-router-dom";

const TodoItem = ({completed, text, id}) => {
  const {handleToggleCompleted, handleDelete} =useContext(TodoContext);
  const navigate = useNavigate();
  const navigateAfterDelete = (id) => {
    handleDelete(id);
    navigate("/");
  }
    return (
      <TodoItemWrapper>
      <TodoItemLink to={`/todos/${id}`} $completed={completed} >{text}</TodoItemLink>
      <TodoItemActions>
      <ActionButton onClick={() => handleToggleCompleted(id)} $bgColor={completed ? "#242424" : "#582be6"}>
        {completed ? "취소하기" : "완료하기"}
      </ActionButton>
      <ActionButton onClick={() => navigateAfterDelete(id)} $bgColor="#e6582b">삭제하기</ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
    );
}

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  justify-content: space-between;
  align-items: center;
`;

const TodoItemLink = styled(Link)`
  text-decoration: ${({$completed}) => ($completed ? "line-through" : "none")};
  
  &:hover{
    text-decoration: underline;
  }
`

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ActionButton = styled.button`
  background-color: ${({ $bgColor = "#e6582b"}) => $bgColor};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  word-break: keep-all;
  &:hover{
    opacity: 0.8;
  }
  
`

export default TodoItem;