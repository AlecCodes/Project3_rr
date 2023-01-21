import {Form} from 'react-router-dom'

function Header(props){
    return <div className="header">
        <div className='headerTop'>
            <div>
                <h2>RESTAURANT <br/> REVIEW</h2>
            </div>
            <Form>
                <input type='text' placeholder='Search'/>
                <input type="submit" value='Search'/>
            </Form>
            <div>
                <a>Register</a>
                <a>Login</a>
            </div>
        </div>
        <div className="headerBottom">
                <div>Restaurants</div>
                <div>Write Review</div>
        </div>
    </div>
}
export default Header