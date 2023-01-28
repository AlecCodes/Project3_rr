import { useLoaderData, Form } from "react-router-dom";
import {useState} from 'react'
import Delete from "../Components/Delete";
import Rating from "../Components/Rating";

function Show(props) {
  const restaurant = useLoaderData();

  function clickHandler(number){
    console.log(number)
  }

  const [ratingState, setRatingState] = useState(null)

  return (
    <div className="showForm">
      <Rating clickHandler={clickHandler} className="rating" />
      <Form action={`/update/${restaurant._id}`} method="post">
        <input type='number' name='rating' placeholder="Rating!"/>
        <input type="text" name="name" placeholder="Restaurant Name" className="showinput"/>
        <br />
        <input type="text" name="image" placeholder="Restaurant Image" className="showinput"/>
        <br />
        <input type="text" name="type" placeholder="Food Type" className="showinput"/>
        <br />
        <input type="submit" value="Update" className="showsubmit"/>
      </Form>
      <Delete id={restaurant._id}/>
      <div className="show-container">
        <div className="image-container">
          <img src={restaurant.image} className="restaurant-image" />
          <div className="title-overlay">
            <div className="title-text" style={{ textAlign: "center" }}>
              <div className="showHeader">{restaurant.name}</div>
            </div>
          </div>
        </div>
        <div className="showDetails">
          <p>{restaurant.cuisine} Cuisine</p>
        </div>
      </div>
    </div>
  );
}

export default Show;
