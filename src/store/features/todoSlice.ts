import {createSlice, PayloadAction, nanoid} from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    body: string;
    isDone: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {todos: []}

const TodosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ body: string }>) => {
            state.todos.push({
                id: nanoid(),
                body: action.payload.body,
                isDone: false
            })
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const undeletedTodos = state.todos
                .filter(todo => todo.id !== action.payload)

            state.todos = undeletedTodos;
        },
        changeTodoState: (state, action: PayloadAction<string>) => {
            const changedTodos = state.todos
                .map(todo => {
                    if (todo.id === action.payload) {
                        todo.isDone = !todo.isDone
                    }
                    return todo
                })

            state.todos = changedTodos;
        }
    }
})

export default TodosSlice.reducer;
export const {
    addTodo,
    deleteTodo,
    changeTodoState
} = TodosSlice.actions;