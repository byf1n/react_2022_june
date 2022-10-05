import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {User} from "../user/User";

const Users = ({getUserId}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value.data))
    },[]);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)
            }
        </div>
    )
}
export {Users};