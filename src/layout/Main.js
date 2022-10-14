import './Main.css';

import {NavLink, Outlet, useLocation} from "react-router-dom";
import {Footer, Header} from "../components";
import top from "../layout/asasa.jpg";

const Main = () => {
const location = useLocation();


    return (
        <div>
            <Header/>
            {/*style={{ backgroundImage: `url(${header})` }}*/}
            <div  className={'banner'}>
                {/*<div className={'main'}>*/}
                {/*    <div><NavLink className={'qwqw'} to={'home'}>home</NavLink></div>*/}
                {/*    <div><NavLink className={'qwqw'} to={'users'}>users</NavLink></div>*/}
                {/*    <div><NavLink className={'qwqw'} to={'posts'}>posts</NavLink></div>*/}
                {/*</div>*/}
            </div>

            <Outlet/>

            <Footer/>
        </div>
    )
}
export {Main};