import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";
import { Link, useSearchParams } from "react-router-dom";

const TodoDashBoard = () => {
   const {todos} = useContext(TodoContext);
   const [searchParams] = useSearchParams();
   const all = todos.length;
   const completed = todos.filter((todo) => todo.completed).length;
   const pending = all - completed;
   
   const selectedFilter = searchParams.get('filter') || 'all';
    return (
        <>
            <TodoDashBoardSection>
               <TodoDashBoardHeader>Quick Access</TodoDashBoardHeader>
               <TodoDashBoardCardList>
                  <TodoDashBoardCardWrapper $flex={2}>
                     <TodoDashBoardCard to={'/'} $selected={!selectedFilter}>
                     <div><FileCheck /></div>
                     <TodoDashBoardCardContent>{all} <br /><span>All Tasks</span></TodoDashBoardCardContent>
                     </TodoDashBoardCard>
                  </TodoDashBoardCardWrapper>
                  <TodoDashBoardCardWrapper $flex={1}>
                     <TodoDashBoardCard to={'?filter=completed'} $bgColor = "#582be6" $selected={selectedFilter === 'completed'}>
                     <div><LaptopMinimal /></div>
                     <TodoDashBoardCardContent>{completed} <br /><span>Completed Tasks</span></TodoDashBoardCardContent>
                     </TodoDashBoardCard>
                  </TodoDashBoardCardWrapper>
                  <TodoDashBoardCardWrapper $flex={1}>
                     <TodoDashBoardCard to={'?filter=pending'} $bgColor = "#242424" $selected={selectedFilter === 'pending'}>
                     <div><Video /></div>
                     <TodoDashBoardCardContent>{pending} <br /><span>Todo Tasks</span></TodoDashBoardCardContent>
                     </TodoDashBoardCard>
                  </TodoDashBoardCardWrapper>
               </TodoDashBoardCardList>
            </TodoDashBoardSection>
        </>
    );
}

const TodoDashBoardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashBoardHeader = styled.h2`
   font-size: 1.5rem;
   font-weight: bold;
`

const TodoDashBoardCardList = styled.ul`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 1rem;
`

const TodoDashBoardCardWrapper = styled.li`
   flex: ${({$flex}) => $flex};
`

const TodoDashBoardCard = styled(Link)`
   width: 100%;
   display: flex;
   flex-direction: column;
   height: 184px;
   flex: 1;
   background-color: ${({$bgColor = "#e6582b"}) => $bgColor};
   justify-content: space-between;
   color: white;
   padding: 1.25rem;
   border-radius: 1rem;
   cursor: pointer;
   text-decoration: ${({$selected}) => ($selected ? "underline" : "none")};
`

const TodoDashBoardCardContent = styled.p`
   font-size: 1.25rem;
   font-weight: 600;
   
   span{
      font-size: 1rem;
      font-weight: 400;
   }
`

export default TodoDashBoard;