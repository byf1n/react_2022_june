import './App.css';
import {Home} from "./layout/Home";
import {Albums, Comments, Post, Posts, Todos} from "./components";

import {Routes,Route} from "react-router-dom";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}>
                        <Route path={':id'} element={<Posts/>}/>
                    </Route>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
