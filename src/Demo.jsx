import {useQuery} from "@tanstack/react-query";
import {fetchTodos} from "./api/index.js";
import {TodoCard} from "./components/TodoCard.jsx";

export const Demo = () => {
    const {data: todos, isLoading} = useQuery({
        queryFn: () => fetchTodos(),
        queryKey: ["todos"]
    })
    if (isLoading)
        return <div>Loading...</div>
    
    return (
        <div>
            {todos.map(todo => {
                return <TodoCard key={todo.id} todo={todo}></TodoCard>
            })}
        </div>
    )
}
