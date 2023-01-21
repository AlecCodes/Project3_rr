import data from '../dummydata'

function Index(props){
    data.sort((a,b) => {
        if (a.name > b.name){
            return 1
        } else if(a.name < b.name){
            return -1
        } else {
            return 0
        }
    })
    return <div className="container">

            {data.map((element, index) => (
                <div className="card">
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