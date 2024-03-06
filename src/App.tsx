import {FC} from 'react';
import TodosList from "./components/TodoList/TodoList.tsx";
import NewTodosForm from "./components/NewTodoForm/NewTodoForm.tsx";

const App: FC = () => {
    return (
        <div className="flex flex-col justify-items-center items-center bg-gray-200  w-screen h-screen">
            <NewTodosForm/>
            <TodosList/>
        </div>
    );
}

export default App;