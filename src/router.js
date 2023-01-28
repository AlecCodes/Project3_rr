import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Index from './Pages/Index'
import Show from './Pages/Show'
import App from './App'
import Create from './Pages/Create'
import Login from './Pages/Login'
import Logout from './Pages/Logout'
import Register from './Pages/Register'
import { createAction, deleteAction, updateAction, loginAction, logoutAction, registerAction} from "./actions"
import { restaurantLoader, restaurantsLoader } from "./loaders"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={restaurantsLoader}/>
        <Route path="/:id" element={<Show/>} loader={restaurantLoader}/>
        <Route path="create" element={<Create/>} action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        <Route path="login" element={<Login/>} action={loginAction}/>

        <Route path="logout" element={<Logout/>} action={logoutAction}/>

        <Route path="register" element={<Register/>} action={registerAction}/>
    </Route>
))

export default router