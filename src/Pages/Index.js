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
    return <div className="container">
            <div className='controlPanel'>
                <Form>
                    <input
                    value = {formState}
                    onChange = {changeHandler}
                    placeholder='Search by Name' 
                    type='text'/>
                    <br/>
                    <br/>
                    <input type='submit'/>
                    <button onClick={clearFilter}>Clear</button>
                </Form>
            </div>
            <div className='cardContainer'>
            {dataState.map((element, index) => (
                <div className="card" key={index}>
                    <div className="cardHeader"><Link to={`/${element._id}`}>{element.name}</Link></div>
                    <div className='cardImageContainer'>
                        <img src={element.image} alt=""/>
                    </div>
                    <div className="cardFooter">
                        <span>{element.address}</span>
                        <br/>
                        <span>{element.cuisine}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
}
export default Index