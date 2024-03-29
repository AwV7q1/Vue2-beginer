import Todo from '@/assets/module/module'

const doneTodos = (state: { todos: Array<Todo> }) => {
    return state.todos.filter((todo) => todo.done)
}

const doneTodosCount = (state: any, getters: { doneTodos: string | any[] }) => {
    return getters.doneTodos.length
}

const getToDoById = (state: { todos: Array<Todo> }) => (id: number) => {
    return state.todos.find((todo) => todo.id === id)
}

const getUserName = (state: { username: string }) => {
    return state.username
}

export default {
    doneTodos,
    doneTodosCount,
    getToDoById,
    getUserName
}