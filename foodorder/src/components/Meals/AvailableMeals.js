import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Paneer Tikka",
//     description: "Juicy, marinated paneer cubes grilled to perfection",
//     price: 230,
//   },
//   {
//     id: "m2",
//     name: "Biryani",
//     description:
//       "Aromatic rice, tender meat, and flavorful spices come together",
//     price: 290,
//   },
//   {
//     id: "m3",
//     name: "Handi Mutton",
//     description: "Aromatic mutton cooked in a clay pot with a blend of spices",
//     price: 650,
//   },
//   {
//     id: "m4",
//     name: "Chicken Tikka",
//     description: "Juicy, marinated chicken chunks grilled to perfection",
//     price: 400,
//   },
//   {
//     id: "m5",
//     name: "Afghani SoyaChaap",
//     description: "Juicy, succulent soya chunks marinated in a blend of spices",
//     price: 280,
//   },
//   {
//     id: "m6",
//     name: "Dal Makhani & Jeera Rice",
//     description: "A hearty and flavorful meal that is perfect for a cold day.",
//     price: 150,
//   },
//   {
//     id: "m7",
//     name: "Chole Bhature",
//     description:
//       "delicious Punjabi dish of spiced chickpeas and fluffy fried bread.",
//     price: 200,
//   },
// ];
const AvailableMeals = () => {
  const[meals, setmeals] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
   const[httpError, setHttpError] = useState();
  useEffect(()=>{
    const fetchMeals = async () => {
    const response = await fetch('https://mealxotic-default-rtdb.firebaseio.com/meals.json');
    if(!response.ok){
    throw new Error('Something went wrong!!');
    //this is what is stored in the message part as a string
    }
    const responseData = await response.json();
    const loadedMeals = [];
    for (const key in responseData) {
     loadedMeals.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price,
     })
    }

    setmeals(loadedMeals);
    setIsLoading(false);  
  }
  
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message)
    } );
    //we have to do this like this because we are using try and catche here earlier but keep in mind we are using async await function here and it always returns promise and now if we throw an error inside of a promise that error will cause that promise to reject so we can not use try catch to wrap the fetchmeals() call function instead we can do the above or we can make the try catch wrap thing (do add await in front of the function call) into a seperate function so we will going to have two function one for sending the request one that is with one but i chose the first approach  
  },[]);
   //in useEffect [async()=>{}] you cannot return a promise it should be a clean up function
  //that runs synchronously and do not return a promise so we should create new async await function 
   if(isLoading){
    return(
      <section className={classes.meals}>
    <div className={classes.spinner}>
    </div>
    </section>
    )
   }
   if(httpError){
    return(
      <section className={classes.MealsError}>
        <p>{httpError}</p>
        </section>
    )
   }
   const mealslist = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
