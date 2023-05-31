import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Tikka",
    description: "Juicy, marinated paneer cubes grilled to perfection",
    price: 230,
  },
  {
    id: "m2",
    name: "Biryani",
    description:
      "Aromatic rice, tender meat, and flavorful spices come together",
    price: 290,
  },
  {
    id: "m3",
    name: "Handi Mutton",
    description: "Aromatic mutton cooked in a clay pot with a blend of spices",
    price: 650,
  },
  {
    id: "m4",
    name: "Chicken Tikka",
    description: "Juicy, marinated chicken chunks grilled to perfection",
    price: 400,
  },
  {
    id: "m5",
    name: "Afghani SoyaChaap",
    description: "Juicy, succulent soya chunks marinated in a blend of spices",
    price: 280,
  },
  {
    id: "m6",
    name: "Dal Makhani & Jeera Rice",
    description: "A hearty and flavorful meal that is perfect for a cold day.",
    price: 150,
  },
  {
    id: "m7",
    name: "Chole Bhature",
    description:
      "delicious Punjabi dish of spiced chickpeas and fluffy fried bread.",
    price: 200,
  },
];
const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal) => (
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
