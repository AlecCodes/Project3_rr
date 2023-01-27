import {Form} from 'react-router-dom'

function Logout(props){
    return(
        <div>
            <Form action='/logout' method='post'>
                <h1>Are you sure you want to logout?</h1>
                <input type='submit' value='Logout'/>
            </Form>
        </div>
    )
}

export default Logout