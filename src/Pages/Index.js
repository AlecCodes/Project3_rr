const data = [
    {name: "BurgerLounge",
    image: "https://www.burgerlounge.com/perch/resources/locations/del-sur-mobile.jpg",
    address: "4283 Burger st",
    cuisine: "American" 
    },
    {name: "Village Kitchen",
    image: "https://cdn.vox-cdn.com/thumbor/zbCtzHKbKlScrHlhPGTlylCl8_g=/0x0:2000x1500/1200x800/filters:focal(0x0:2000x1500)/cdn.vox-cdn.com/uploads/chorus_image/image/48503479/village_kitchen.0.0.JPG",
    address: "3323 Adams Ave",
    cuisine: "Chinese" 
    },
    {name: "Gen BBQ",
    image: "https://ml.globenewswire.com/Resource/Download/6f587d20-2d9a-44d0-8894-5c41d613af44?size=3",
    address: "3522 Adams Ave",
    cuisine: "Korean" 
    },
    {
    name: "Luigi's pizza",
    image:"https://images.squarespace-cdn.com/content/v1/5982fa4fe58c62cb28091fa4/1578399820670-9PSKMMZQMBNGFTTTJ9PZ/Pizzeria",
    address: "3400 pizza st",
    cuisine: "Italian"
    }
    
]



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