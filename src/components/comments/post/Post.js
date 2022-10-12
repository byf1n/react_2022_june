const Post = ({post}) => {

    return (
        <div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    )
}
export {Post};