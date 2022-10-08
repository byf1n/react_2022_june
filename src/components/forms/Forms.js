import {useForm} from "react-hook-form";
import {usersService} from "../../services";

const Forms = ({setUsers}) => {

    let {register, reset, handleSubmit, formState: {errors,isValid}} = useForm({
        mode: "onBlur"
    });

    const submit = (obj) => {
        usersService.postUser(obj).then(({data}) => setUsers(users => [...users,data]));
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name...'} {...register('name', {required: 'поле обязательно'})} />
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'username...'} {...register('username')}/>
                <input type="text" placeholder={'email...'} {...register('email')}/>
                <button>submit</button>
            </form>
        </div>
    )
}
export {Forms};