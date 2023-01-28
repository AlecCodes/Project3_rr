import {Form, Link, useLoaderData} from 'react-router-dom'
import {useState, useEffect} from 'react'


function Index(props){

    let currentUser = JSON.parse(localStorage.getItem("token")).username

    //Load restaurants 
    const data = useLoaderData()
    const [dataState, setDataState] = useState(data)
    //control form
    const [formState, setFormState] = useState('')

    function changeHandler(event){
        const filtered = [...data].filter((element) => {
            if(formState.toUpperCase() === element.name.substring(0,formState.length).toUpperCase()){
                return element
            }
        })
        setFormState(event.target.value)
        setDataState(filtered)
    }

    function personalFilter(){
        const filtered = [...data].filter((element) => {
            if(currentUser === element.creator){
                return element
            }
        }) 
        setDataState(filtered)
    }
    
    function clearFilter(event){
        setFormState('')
        setDataState(data)
    }
    //alphabetize 
    dataState.sort((a,b) => {
        if (a.name > b.name){
            return 1
        } else if(a.name < b.name){
            return -1
        } else {
            return 0
        }
    })
    return <div className='main'>
        <aside className='sidebar'>
            <div>
                <p>{`Welcome, ${currentUser}!`}</p>
            </div>
            <Form>
                <input
                    className='search'
                    value = {formState}
                    onChange = {changeHandler}
                    placeholder='Search by Name' 
                    type='text'/>
                    <br/>
                <input className='searchsubmit' type='submit'/>
                <button className='clear' onClick={clearFilter}>Clear</button>
                <button className='clear' onClick={personalFilter}>Personal</button>
            </Form>

            <nav className='navbar'>
                <Link to="register">
                    <div>Register</div>
                </Link>
                <Link to="login">
                    <div>Log In</div>
                </Link>
                <Link to='create'>
                    <div>Add Restaurant</div>
                </Link>
                <br/>
                {/* //Wrap this in logic so it dissapears when logged out? */}
                <Link to='logout'>
                    <div>Logout</div>
                </Link>
            </nav>
        
        </aside>

        <div className='container'>
        {dataState.map((element, index) => (

            <div className='card stacked' key={index}>

                <Link to={`/${element._id}`}><img src={element.image} alt={element.name} className='cardimage'/></Link>

                <div className='cardcontent'>
                    <p className='cardtitle'>{element.name}</p>
                    <p className='cardaddress'>{element.address}</p>
                    <p>{element.cuisine}</p>
                    <Link to={`/${element._id}`}>How Was It?</Link>
                </div>

            </div>

        ))}
        </div>
    </div>
}
export default Index