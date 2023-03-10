import { redirect } from 'react-router-dom';

//DEV URL
//const URL = "http://localhost:4000"


let URL = "https://rr-api-jwt.onrender.com"


if (!localStorage.getItem("token")){
    localStorage.setItem('token',JSON.stringify({token: null, username:"Anonymous eater"}))
}
let currentUser = JSON.parse(localStorage.getItem("token")).username



export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newRestaurant = {
        creator: currentUser,
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
    console.log(currentUser)
    return redirect('/')
}

export const  updateAction = async ({request, params}) => {
    const formData = await request.formData();
    const newRestaurant = {
        rating: formData.get("rating"),
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

export const loginAction = async({request}) => {
    const formData = await request.formData()
    const User = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    fetch(URL + '/auth/login',{
        method:'post',
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(User)
    })
    .then(response => response.json())
    //username and token are bundled together
    .then(data => localStorage.setItem('token', JSON.stringify(data)))
    return redirect('/')
}

export const logoutAction = async() =>{
    localStorage.setItem('token',JSON.stringify({token: null, username:"Anonymous eater"}))
    console.log("Logout~!")
    return redirect('/')
}

export const registerAction = async({request}) => {
    const formData = await request.formData()
    const newUser = {
        username: formData.get("username"),
        password: formData.get("password")
    }
    fetch(URL + '/auth/signup',{
        method:'post',
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newUser)
    })
    return redirect('/')
}