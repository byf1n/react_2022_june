const User = ({user,getUserId}) => {

    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <button onClick={() => getUserId(user.id)}>posts</button>
        </div>
    )
}
export {User};