

//DEV URL
//const URL = "http://localhost:4000"


//JWT URL
const URL = "https://rr-api-jwt.onrender.com"
 
export const restaurantsLoader = async () => {
    const response = await fetch(URL + '/restaurant')
    const restaurants = await response.json()
    return restaurants
}

export const restaurantLoader = async ({params}) => {
    const response = await fetch(URL + '/restaurant/' + params.id)
    const restaurant = await response.json()
    return restaurant
}