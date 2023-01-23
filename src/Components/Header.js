import {Link, Form} from 'react-router-dom'

function Header(props){
    return <div className="header">
        <div className='headerTop'>
            <div>
                <h2>RESTAURANT <br/> REVIEW</h2>
            </div>
            <div>
                <a>Register</a>
                <a>Login</a>
            </div>
        </div>
        <div className="headerBottom">
                <div>Restaurants</div>
                <Link to='create'>
                    <div>Write Review</div>
                </Link>
        </div>
    </div>
}
export default Header