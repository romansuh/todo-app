import {createSlice, PayloadAction, nanoid} from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    body: string;
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
                body: action.payload.body
            })
        }
    }
})

export default TodosSlice.reducer;
export const {addTodo} = TodosSlice.actions;