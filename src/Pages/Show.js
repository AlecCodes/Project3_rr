import { useLoaderData, Form } from "react-router-dom";
// import { useOutletContext } from 'react-router-dom'
import Delete from '../Components/Delete';
import Rating from "../Components/Rating";

function Show(props) {
  // const restaurant = useLoaderData();
  const restaurant = useLoaderData();

  return (
    <div className="showContainer">
      <Rating />
      <Form action={`/update/${restaurant._id}`} method="post">
        <input type="text" name="name" placeholder="Restaurant Name" />
        <br />
        <input type="text" name="image" placeholder="Restaurant Image" />
        <br />
        <input type="text" name="type" placeholder="Food Type" />
        <br />
        <input type="submit" value="Update Restaurant" />
      </Form>
        <Delete id={restaurant._id}/>
      <div className="showHeader">{restaurant.name}</div>
      <div className="showImageContainer">
        <img src={restaurant.image} />
      </div>
      <div className="showDetails">
        <p>{restaurant.cuisine} Cuisine</p>
      </div>
    </div>
  )
  
}
export default Show;
