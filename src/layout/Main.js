import './Main.css';

import {NavLink, Outlet} from "react-router-dom";

const Main = () => {

    return (
        <div>
            <div className={'main'}>
                <div><NavLink className={'qwqw'} to={'home'}>home</NavLink></div>
                <div><NavLink className={'qwqw'} to={'users'}>users</NavLink></div>
                <div><NavLink className={'qwqw'} to={'posts'}>posts</NavLink></div>
            </div>

            <Outlet/>
        </div>
    )
}
export {Main};