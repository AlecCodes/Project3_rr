import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import {Header} from './Components/Header'
import Index from './Pages/Index'
import Show from './Pages/Show'
import App from './App'
import { createAction, deleteAction, updateAction } from "./actions"
import { restaurantLoader, restaurantsLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={restaurantsLoader}/>
        <Route path="/:id" element={<Show/>} loader={restaurantLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
))

export default router