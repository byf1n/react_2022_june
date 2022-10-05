const Post = ({post}) => {

    return (
        <div>
            <div><b>userId: {post.userId}</b></div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    )
}
export {Post};