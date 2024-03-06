import {FC, useMemo, useState} from "react";
import TodoElement from "./TodoElement";
import {useAppSelector} from "../../store/hooks";
import TodoFilter from "./TodoFilter.tsx";

const TodosList: FC = () => {
    const [filter, setFilter] = useState<string>();
    const todos = useAppSelector(state => state.todos.todos);
    const [completed, current] = useMemo(() => {
        console.log("memo")
        return [
            todos.filter(todo => todo.isDone),
            todos.filter(todo => !todo.isDone)
        ]
    }, [todos])

    const renderTodos = () => {
        if (filter === "current") {
            return <>
                {current.map((todo, index) => {
                    return <TodoElement key={index} {...todo}/>
                })}
            </>
        }

        if (filter === "completed") {
            console.log("compl")
            return <>
                {completed.map((todo, index) => {
                    return <TodoElement key={index} {...todo}/>
                })}
            </>
        }

        return <>
            {todos.map((todo, index) => {
                return <TodoElement key={index} {...todo}/>
            })}
        </>
    }

    return (
        <div className="bg-gray-300 overflow-auto max-h-[70vh] mt-6 rounded-md min-w-[30vh]">
            <TodoFilter filterSettingFunc={setFilter}/>
            {todos.length === 0
                ?
                <span className="w-full text-center">Add records</span>
                :
                <ul className="list-none">
                    {renderTodos()}
                </ul>
            }
        </div>
    );
}

export default TodosList;