import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {services} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        services.getComments().then(value => setComments(value.data.splice(0,15)));
    },[])
    return (
        <div>

            <Outlet/>

            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}


        </div>
    )
}
export {Comments};