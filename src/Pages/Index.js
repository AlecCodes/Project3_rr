import { useOutletContext } from 'react-router-dom'
import data from '../dummydata'

function Index(props){
    //See the context prop of Outlet component in app.js
    const contextdata = useOutletContext()
    // console.log("CONTEXT DATA IN INDEX ROUTE - VVVVVV")
    // console.log(contextdata)

    contextdata.sort((a,b) => {
        if (a.name > b.name){
            return 1
        } else if(a.name < b.name){
            return -1
        } else {
            return 0
        }
    })
    return <div className="container">

            {contextdata.map((element, index) => (
                <div className="card" key={index}>
                    <div className="cardHeader">{element.name}</div>
                    <div className='cardImageContainer'>
                        <img src={element.image}/>
                    </div>
                    <div className="cardFooter">
                        <span>{element.address}</span>
                        <br/>
                        <span>{element.cuisine}</span>
                    </div>
                </div>
            ))}
        </div>
}
export default Index