import {Form} from 'react-router-dom'

function Header(props){
    return <div className="header">
        <div>
            <h1>RESTAURANT <br/> REVIEW</h1>
        </div>
        <Form width='30%'>
            <input type='text' placeholder='Search'/>
            <input type="submit" value='Search'/>
        </Form>
        <div>
            <a>Register</a>
            <a>Login</a>
        </div>
    </div>
}
export default Header