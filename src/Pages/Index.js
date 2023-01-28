import {Form, Link, useLoaderData} from 'react-router-dom'
import {useState} from 'react'


function Index(props){
    //See the context prop of Outlet component in app.js
    // const contextdata = useOutletContext()
    // console.log("CONTEXT DATA IN INDEX ROUTE - VVVVVV")
    // console.log(contextdata)
    const data = useLoaderData()
    const [dataState, setDataState] = useState(data)

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

    function clearFilter(event){
        setFormState('')
        setDataState(data)
    }

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
            </Form>

            <nav className='navbar'>
                <Link to="/">
                    <div>Register</div>
                </Link>
                <Link to="/">
                    <div>Log In</div>
                </Link>
                <Link to='create'>
                    <div>Add Restaurant</div>
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