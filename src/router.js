import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import {Header} from './Components/Header'
import Index from './Pages/Index'
import Show from './Pages/Show'
import App from './App'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>}/>
        <Route path="/:id" element={<Show/>}/>
    </Route>
))

export default router