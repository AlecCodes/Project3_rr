import { redirect, setState } from 'react-router-dom';


let URL = 'https://backend-restaurant-review.onrender.com';

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRestaurant = {
        name: formData.get("name"),
        image: formData.get("image"),
        type: formData.get("type"),
        cuisine: formData.get("cuisine"),
        address: formData.get("address")
    }
    await fetch(URL + "/restaurant", {
        method: "post",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newRestaurant)
    })
    return redirect('/')
}

export const  updateAction = async ({request, params}) => {
    const formData = await request.formData();
    const newRestaurant = {
        name: formData.get("name"),
        image: formData.get("image"),
        cuisine: formData.get("cuisine"),
        address: formData.get("address")
    }

    await fetch(URL + `/restaurant/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRestaurant)
    })
    return redirect('/')
}

export const deleteAction = async ({params}) => {
    await fetch(URL + `/restaurant/${params.id}`, {
        method: 'delete'
    })
    return redirect('/')
}