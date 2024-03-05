import {FC} from 'react';
import TodosList from "./components/TodoList/TodoList.tsx";
import NewTodosForm from "./components/NewTodoForm/NewTodoForm.tsx";

const App: FC = () => {
    return (
        <>
            <NewTodosForm/>
            <TodosList/>
        </>
    );
}

export default App;