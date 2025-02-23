import { Link, useParams } from "react-router-dom";
import TodoItem from "../components/TodoItem";
import styled from "styled-components"
import { useQuery } from "@tanstack/react-query";
import { todoClient } from "../api/todo-api";


const TodoDetailPage = () => {
   const { id } = useParams();
   
const {data: targetTodoItem, isLoading, isError} = useQuery({
  queryKey: ['todo', id],
  queryFn: async () => {
    const response = await todoClient.get(`/${id}`)
    return response.data;
  }
})
   
if(isLoading) return <p>로딩중...</p>
if(isError || !targetTodoItem) return <p>해당 데이터를 찾을 수 없습니다.</p>
   
   return (
    <DetailPageWrapper>
         {targetTodoItem ? (
        <TodoItem 
          id={targetTodoItem.id}
          text={targetTodoItem.text}
          completed={targetTodoItem.completed}
        />
      ) : (
        <p>해당하는 데터ㄹ 찾을 수 없습니다.</p>
      )}
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