const UserDetails = ({user}) => {

    return (
        <div>
            <h3>
                {user.id} -- {user.name} -- {user.website}
            </h3>
        </div>
    )
}
export {UserDetails};