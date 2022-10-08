import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../user/User";
import {Forms} from "../forms/Forms";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value.data))
    },[])

    return (
        <div>
            <div> <Forms setUsers={setUsers}/> </div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}
export {Users};