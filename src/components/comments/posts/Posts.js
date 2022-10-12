import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {services} from "../../../services";
import {Post} from "../post/Post";

const Posts = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null);
    useEffect(() => {
        services.getPosts(id).then(({data}) => setPost(data))
    },[id])
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    )
}
export {Posts};