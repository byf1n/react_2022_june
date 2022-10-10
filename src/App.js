import './App.css';

import {Link, Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import {Users} from "./components/Users";
import {Posts} from "./components/Posts";
import {Footer} from "./components/footer";

function App() {
    return (
        <div>

            <header>
                <div className={'header_1'}>f t y g</div>
                <div className={'header_2'}>0675482048</div>
            </header>

            <div className={'main'}>
                <div><Link className={'qwqw'} to={'/'}>home</Link></div>
                <div><Link className={'qwqw'} to={'/users'}>users</Link></div>
                <div><Link className={'qwqw'} to={'/posts'}>posts</Link></div>
            </div>


            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/users'} element={<Users/>}></Route>
                <Route path={'/posts'} element={<Posts/>}></Route>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
