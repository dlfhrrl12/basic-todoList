import styled from "styled-components";

const TodoItem = ({completed, text, handleToggleCompleted, handleDelete, id}) => {
    return (
      <TodoItemWrapper>
      <TodoItemText $completed={completed} >{text}</TodoItemText>
      <TodoItemActions>
      <ActionButton onClick={() => handleToggleCompleted(id)} $bgColor={completed ? "#242424" : "#582be6"}>
        {completed ? "취소하기" : "완료하기"}
      </ActionButton>
      <ActionButton onClick={() => handleDelete(id)} $bgColor="#e6582b">삭제하기</ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
    );
}

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  justify-content: space-between;
  align-items: center;
`;

const TodoItemText = styled.p`
  text-decoration: ${({$completed}) => ($completed ? "line-through" : "none")};
`

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const ActionButton = styled.button`
  background-color: ${({ $bgColor = "#e6582b"}) => $bgColor};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
  
`

export default TodoItem;