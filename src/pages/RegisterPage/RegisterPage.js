import {useForm} from "react-hook-form";
import {authService} from "../../services";

const RegisterPage = () => {
    const {handleSubmit, register} = useForm();

    const submit = async (user) => {
        try{
            await authService.register(user);
        }catch (e){
            console.log(e);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    )
}
export {RegisterPage};