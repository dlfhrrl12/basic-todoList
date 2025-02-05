import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import styled from "styled-components";

const TodoDashBoard = ({all = 0, completed = 0, pending = 0}) => {
    return (
        <>
            <TodoDashBoardSection>
               <TodoDashBoardHeader>Quick Access</TodoDashBoardHeader>
               <TodoDashBoardCardList>
                  <TodoDashBoardCardWrapper $flex={2}>
                     <TodoDashBoardCard >
                     <div><FileCheck /></div>
                     <TodoDashBoardCardContent>{all} <br /><span>All Tasks</span></TodoDashBoardCardContent>
                     </TodoDashBoardCard>
                  </TodoDashBoardCardWrapper>
                  <TodoDashBoardCardWrapper $flex={1}>
                     <TodoDashBoardCard $bgColor = "#582be6">
                     <div><LaptopMinimal /></div>
                     <TodoDashBoardCardContent>{completed} <br /><span>Completed Tasks</span></TodoDashBoardCardContent>
                     </TodoDashBoardCard>
                  </TodoDashBoardCardWrapper>
                  <TodoDashBoardCardWrapper $flex={1}>
                     <TodoDashBoardCard $bgColor = "#242424">
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

const TodoDashBoardCard = styled.button`
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