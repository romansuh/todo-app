import {FC} from "react";
interface TodoFilterProps {
    filterSettingFunc: (arg: string) => void
}
const TodoFilter: FC<TodoFilterProps> = ({filterSettingFunc}) => {

    return (
        <div>
            <select name="filters" onChange={(e) => filterSettingFunc(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="current">Current</option>
            </select>
        </div>
    );
};

export default TodoFilter;