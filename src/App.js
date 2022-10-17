import './App.css';
import {MainLayout} from "./layouts";
import {Navigate, Route, Routes} from "react-router-dom";
import {LoginPage, RegisterPage} from "./pages";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
