import './Main.css';

import {NavLink, Outlet} from "react-router-dom";
import {Header} from "../components";

const Main = () => {

    return (
        <div>
            <Header/>

            <div className={'main'}>
                <div><NavLink className={'qwqw'} to={'home'}>home</NavLink></div>
                <div><NavLink className={'qwqw'} to={'users'}>users</NavLink></div>
                <div><NavLink className={'qwqw'} to={'posts'}>posts</NavLink></div>
            </div>

            <Outlet/>

            <Header/>
        </div>
    )
}
export {Main};