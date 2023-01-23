import {Link, Form} from 'react-router-dom'

function Header(props){
    return <div className="header">
        <h1>Hungr</h1>
        <nav className='navbar'>
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to='create'>
                <div>Write Review</div>
            </Link>
        </nav>
    </div>
}
export default Header