import {FC} from "react";
import {useAppDispatch} from "../../store/hooks";
import {addTodo} from "../../store/features/todoSlice";
import {SubmitHandler, useForm} from "react-hook-form";

interface IInputValues {
    body: string
}

const NewTodosForm: FC = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<IInputValues>()

    const handleAddingNewTodo: SubmitHandler<IInputValues> = (data) => {
        dispatch(addTodo({
            ...data
        }))
    }

    return (
        <form onSubmit={handleSubmit(handleAddingNewTodo)}>
            <label>New {"todo"}</label>
            <input {
                       ...register("body",
                           {required: true, minLength: 3})
                   } />
            {errors.body && <span>Record should be at least 3 characters.</span>}
            <input type="submit" hidden/>
            <button type="submit">Add</button>
        </form>
    );
}

export default NewTodosForm;
