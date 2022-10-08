const User = ({user}) => {

    return (
        <div>
            <div>{user.id} - {user.name} {user.username}</div>
            <p>{user.email}</p>
        </div>
    )
}
export {User};