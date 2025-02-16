import { Link, useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoDetailPage = () => {
  const { todos } = useContext(TodoContext);
   const { id } = useParams();
   
   
   
   const targetTodoItem = todos.find((todo) => todo.id === Number(id))
  
   if(!targetTodoItem){
    return( 
      <DetailPageWrapper>
       <p>해당하는 데이터를 찾을 수 없습니다.</p>
       <GoBackLink to={"/"}>뒤로가기</GoBackLink>
      </DetailPageWrapper>
    );
   }
   
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