import { TodoContext } from "../context/TodoContext";

const TodoProvider = ({childern}) => {
    return (
        <>
            <TodoContext.Provider value={{}}>
               {childern}
            </TodoContext.Provider>
        </>
    );
}

export default TodoProvider;