import {useEffect, useState} from "react";
import {userService} from "../../services";
import {User} from "../user/User";
import {UserDetails} from "../user-details/User-details";

const Users = () => {

    let [users, setUsers] = useState([]);

    let [user, setUser] = useState(null);

    const ShowUser = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    },[])
    return (
        <div>
            {
                user && <UserDetails key={user.id} user={user}/>
            }
            {
                users.map(user => <User key={user.id} user={user} ShowUser={ShowUser}/>)
            }
        </div>
    )
}
export {Users};