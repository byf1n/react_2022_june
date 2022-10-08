import {useForm} from "react-hook-form";
import {commentsService} from "../../services";

const Forms = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all'
    });

    const submit = (obj) => {
        commentsService.postComment(obj).then(({data}) => setComments(comments => [...comments,data]));
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name...'} {...register('name',
                    {required: {value:true,message:'не заповнено!!!!'}} )}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'body...'} {...register('body')}/>
                <button disabled={! isValid}>submit</button>
            </form>
        </div>
    )
}
export {Forms};