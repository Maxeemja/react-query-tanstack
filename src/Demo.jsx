import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addTodo, fetchTodos} from "./api/index.js";
import {TodoCard} from "./components/TodoCard.jsx";
import {useState} from "react";

export const Demo = () => {
    const queryClient = useQueryClient()
    const [title, setTitle] = useState('');
    const [search, setSearch] = useState('')
    const {data: todos, isLoading, isFetching} = useQuery({
        queryFn: () => fetchTodos(search), queryKey: ["todos", {search}]
    })

    const {mutateAsync: addTodoMutation} = useMutation({
        mutationFn: addTodo, onSuccess: () => {
            queryClient.invalidateQueries(['todos'])
        }
    })
    
    
    if(isFetching) return <div>Fe</div>

    if (isLoading) return <div>Loading...</div>

    return (<div>
        <div>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        <button onClick={async () => {
            try {
                await addTodoMutation(title);
                setTitle('');
            } catch (e) {
                console.error(e);
            }
        }}>
            Add Todo
        </button>
        {todos?.map(todo => {
            return <TodoCard key={todo.id} todo={todo}></TodoCard>
        })}
    </div>)
}
