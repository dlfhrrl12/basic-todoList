import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/todo-api";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
    const [searchParams] = useSearchParams();
    const selectedFilter = searchParams.get("filter");

    const {
        data: todos,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["todos", selectedFilter],
        queryFn: () => getTodos(selectedFilter),
    });

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error fetching todos - {error}</div>
    }

    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Tasks</h2>

            <ul className="flex flex-col gap-4">
                {todos.map(({ id, text, completed }) => (
                    <TodoItem key={id} completed={completed} text={text} id={id} />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
