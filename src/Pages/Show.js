import { useLoaderData } from "react-router-dom";
// import { useOutletContext } from 'react-router-dom'


function Show(props) {
  // const restaurant = useLoaderData();
  const restaurant = useLoaderData();

  return (
    <div className="showContainer">
      <div className="showHeader">{restaurant.name} NAME </div>
      <div className="showImageContainer">
        <img src={restaurant.image} />
      </div>
      <div className="showDetails">
        <p>{restaurant.address} Address </p>
        <p>{restaurant.cuisine} Cuisine</p>
      </div>
    </div>
  );
}
export default Show;
