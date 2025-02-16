import { Link, useParams } from "react-router-dom";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";

const TodoDetailPage = () => {
   const { id } = useParams();
   
   const targetTodoItem = SAMPLE_TODOS.find((todo) => todo.id === Number(id))
  return (
    <DetailPageWrapper>
      <TodoItem id={targetTodoItem.id} text={targetTodoItem.text} completed={targetTodoItem.completed} />
      <GoBackLink to={"/"}>뒤로가기</GoBackLink>
    </DetailPageWrapper>  
    );
};

const GoBackLink = styled(Link)`
  display: block;
  margin-top: 1rem;
  background-color: #242424;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 1.25rem;
`

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default TodoDetailPage;