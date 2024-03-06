import {FC} from "react";
import {changeTodoState, deleteTodo, Todo} from "../../store/features/todoSlice";
import {useAppDispatch} from "../../store/hooks.ts";

const TodoElement: FC<Todo> = ({id, body, isDone}) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <label className="text-xl">
                <div className={`flex flex-row px-10 py-5 font-bold rounded-md w-96 m-10
                ${isDone ? "done" : "undone"}`}>
                    <input type="checkbox" name={id} onChange={() => dispatch(changeTodoState(id))}/>
                    {body}

                    <button
                        className="btn-secondary relative right-0"
                        type="button"
                        onClick={() => dispatch(deleteTodo(id))}
                    >
                        Delete
                    </button>
                </div>
            </label>
        </li>
    );
}

export default TodoElement;