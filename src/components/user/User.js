const User = ({user,ShowUser}) => {


    return (
        <div>
            <div>{user.id} - {user.email} </div>
            <button onClick={() => ShowUser(user) }>info</button>

        </div>
    )
}
export {User};