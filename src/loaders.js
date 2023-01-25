import { useParams } from "react-router-dom"

const URL = 'https://backend-restaurant-review.onrender.com'

export const restaurantsLoader = async () => {
    const response = await fetch(URL + '/restaurant')
    const restaurants = await response.json()
    return restaurants
}

export const restaurantLoader = async (params) => {
    const response = await fetch(URL + '/' + params.id)
    const restaurant = await response.json()
    return restaurant
}