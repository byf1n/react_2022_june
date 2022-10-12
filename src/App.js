import './App.css';

import {Main} from "./layout/Main";

import {Footer, Header, Home, Posts, Users} from "./components";

import {Routes, Route, Navigate} from "react-router-dom";


function App() {
    return (
        <div>

            <Header/>

            <Routes>
                <Route path={'/'} element={<Main/>}>
                    <Route index element={<Navigate to={'home'} />} />
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                </Route>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
