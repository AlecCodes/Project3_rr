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
    return <div>
    <main className='main'>
        <aside className='sidebar'>
        <Form>
            <input
                className='search'
                value = {formState}
                onChange = {changeHandler}
                placeholder='Search by Name' 
                type='text'/>
                <br/>
                <br/>
            <input type='submit'/>
                <button onClick={clearFilter}>Clear</button>
        </Form>
    </aside>
        <div className='cards'>
        {dataState.map((element, index) => (
            <div className='card' key={index}>
                <img src={element.image} alt={element.name} className='cardimage'/>
                <div className='cardcontent'>
                    <h2>{element.name}</h2>
                    <p>{element.address}</p>
                    <p>{element.name} review snippet</p>
                </div>
                <div className='cardfooter'>
                    <p>{element.cuisine}</p>
                    <Link to={`/${element._id}`}>Review</Link>
                </div>
            </div>
        ))}
        </div>
    </main>
</div>
}
export default Index