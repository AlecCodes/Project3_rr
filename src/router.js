import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Index from './Pages/Index'
import Show from './Pages/Show'
import App from './App'
import Create from './Pages/Create'
import { createAction, deleteAction, updateAction } from "./actions"
import { restaurantLoader, restaurantsLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={restaurantsLoader}/>
        <Route path="/:id" element={<Show/>} loader={restaurantsLoader}/>
        <Route path="create" element={<Create/>} action={createAction}/>
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
))

export default router