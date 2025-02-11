import  TodoForm  from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashBoard from "./TodoDashBoard";
import styled from "styled-components";
import TodoProvider from "../provider/TOdoProvider";



const TodoContainer = () => {
  
    return (
        <TodoProvider>
            <TodoContainerWrapper>
              <TodoDashBoard />
               <TodoForm />
               <TodoList/>
            </TodoContainerWrapper>
        </TodoProvider>
    );
}

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default TodoContainer;