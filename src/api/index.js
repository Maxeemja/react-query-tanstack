

const todos = [
    {id: 1, title:"Learn HTML", completed: false},
    {id: 2, title:"Learn Redux", completed: false},
    {id: 3, title:"Learn React", completed: true},
    {id: 4, title:"Learn CSS", completed: false},
    {id: 5, title:"Learn Svelte", completed: false},
]


export const fetchTodos = async (query = '') => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('fetched')
    
    const filteredTodos = todos.filter(todo => {
        return todo.title.toLowerCase().includes(query.toLowerCase())
    })
    return [...filteredTodos];
}

export const addTodo = async (todo = '') => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newTodo = {
        id: todos.length + 1,
        title: todo.title,
        completed: false
    }
    
    todos.push(newTodo);
    
    return newTodo;
}