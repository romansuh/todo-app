import {FC} from "react";
import {Todo} from "../../store/features/todoSlice";

const TodoElement: FC<Todo> = ({id, body}) => {
    return (
        <li>
            <label>
                <input type="checkbox" name={id}/>
                {body}
            </label>
        </li>
    );
}

export default TodoElement;