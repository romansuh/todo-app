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
        <form
            onSubmit={handleSubmit(handleAddingNewTodo)}
            className="flex flex-col w-1/3 gap-2"
        >
            <label>New todo:</label>
            <input
                className="border-solid border-2 border-stone-950 rounded-md px-5 py-2.5"
                placeholder="Your new record"
                {
                    ...register("body",
                        {required: true, minLength: 3})
                } />
            {errors.body && <span>Record should be at least 3 characters.</span>}
            <input type="submit" hidden/>
            <button className="btn-primary" type="submit">Add</button>
        </form>
    );
}

export default NewTodosForm;
