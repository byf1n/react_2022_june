import {Link, Outlet} from "react-router-dom";

import './Home.css';

const Home = () => {

    return (
        <div>
            <div className={'home'}>
                <div><Link to={'todos'}>todos</Link></div>
                <div><Link to={'albums'}>albums</Link></div>
                <div><Link to={'comments'}>comments</Link></div>
            </div>

            <Outlet/>
        </div>
    )
}
export {Home};