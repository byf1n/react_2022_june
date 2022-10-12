import './Comment.css'

import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const navigate = useNavigate();

    return (
        <div className={'comment'}>
            <div>postId: {comment.postId}</div>
            <div>id: {comment.id}</div>
            <div>name: {comment.name}</div>
            <button onClick={() => navigate(comment.id.toString())}>posts</button>

        </div>
    )
}
export {Comment};