import './App.css';
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {useEffect, useState} from "react";
import {usersService} from "./services";

function App() {
    let [posts, setPosts] = useState([]);


    const getUserId = (userId) => {
        usersService.getPosts(userId).then(value => setPosts(value.data))
    }
    return (
        <div>
            <Users getUserId={getUserId}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
