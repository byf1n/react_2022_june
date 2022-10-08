import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";
import {Forms} from "../forms/Forms";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments((value.data.splice(0,20))))
    },[])
    return (
        <div>
            <div> <Forms setComments={setComments}/> </div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}
export {Comments};