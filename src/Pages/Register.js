import {Form} from 'react-router-dom'

function Signup(props){
    return(
        <div>
            <Form action ='/register' method='post'>
                <h1>Log in</h1>
                <input type='text' name='username' placeholder='username'/>
                <input type='text' name='password' placeholder='password'/>
                <input type='submit'/>
            </Form>
        </div>
    )
}

export default Signup