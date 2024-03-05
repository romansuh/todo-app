import {FC} from "react";
import TodoElement from "./TodoElement";
import {useAppSelector} from "../../store/hooks";

const TodosList: FC = () => {
    const todos = useAppSelector(state => state.todos.todos);

    return (
        <div className="todos_list_container">
            <ul>
                {todos &&
                    todos.map((todo, index) =>
                        <TodoElement
                            key={index}
                            {...todo}
                        />
                    )
                }
            </ul>
        </div>
    );
}

export default TodosList;