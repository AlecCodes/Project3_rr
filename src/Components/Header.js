import { Link } from 'react-router-dom'

function Header(props){
    return <div className="header">
        <Link to='/'><h1>Hungr</h1></Link>
        <div className='main-banner' id='main-banner'>
            <div className='imgban' id='imgban3'>

            </div>
            <div className='imgban' id='imgban2'>

            </div>
            <div className='imgban' id='imgban1'>

            </div>
        </div>
    </div>
}
export default Header