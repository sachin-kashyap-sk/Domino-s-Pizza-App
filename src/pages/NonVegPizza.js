import { Fragment } from "react";
import HeaderImage from "../LogoImage/header.jpg";
import classes from "../Structure.module.css";
import classes2 from "./Css/NonVeg.module.css";
import PizzaFirst from "../NonVegPizzaImages/NonVegFirst.jpg";
import pizzaSecond from "../NonVegPizzaImages/NonVegSecond.jpg";
import pizzaThird from "../NonVegPizzaImages/NonVegThird.jpg";
import PizzaForth from "../NonVegPizzaImages/NonVegForth.jpg";
import PizzaFifth from "../NonVegPizzaImages/NonVegFifth.jpg";
import PizzaSixth from "../NonVegPizzaImages/NonVegSixth.jpg";
import PizzaSeven from "../NonVegPizzaImages/NonVegSeven.jpg";
import PizzaEight from "../NonVegPizzaImages/NonVegEight.jpg";

const Detail = [
  {
    backgroundColor: "#eb5353",
    title: "NON VEG SUPREME",
    description:
      "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    imageUrl: PizzaFirst,
  },
  {
    backgroundColor: "#00ffab",
    title: "CHICKEN DOMINATOR",
    description:
      "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers",
    imageUrl: pizzaSecond,
  },
  {
    backgroundColor: "#9a86a4",
    title: "PEPPER BARBECUE & ONION",
    description: "Pepper Barbecue Chicken I Onion",
    imageUrl: pizzaThird,
  },
  {
    backgroundColor: "#764af1",
    title: "CHICKEN FIESTA",
    description:
      "Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum",
    imageUrl: PizzaForth,
  },

  {
    backgroundColor: "#68a7ad",
    title: "INDI CHICKEN TIKKA",
    description:
      "The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo",
    imageUrl: PizzaFifth,
  },
  {
    backgroundColor: "#9fc088",
    title: "PEPPER BARBECUE CHICKEN",
    description: "Pepper Barbecue Chicken I Cheese BARBECUE CHICKEN",
    imageUrl: PizzaSixth,
  },

  {
    backgroundColor: "#79dae8",
    title: "CHICKEN SAUSAGE",
    description: "Chicken Sausage I Cheese",
    imageUrl: PizzaSeven,
  },

  {
    backgroundColor: "#ce9461",
    title: "CHICKEN GOLDEN DELIGHT",
    description:
      "Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!",
    imageUrl: PizzaEight,
  },

  {
    backgroundColor: "#00ffab",
    title: "CHICKEN DOMINATOR",
    description:
      "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers",
    imageUrl: pizzaSecond,
  },
];

const NonVegPizza = () => {
  return (
    <Fragment>
      <img
        className={classes.headerImage}
        src={HeaderImage}
        alt="header-logo"
      />
      <div className={classes2.main}>
        {Detail.map((obj, index) => (
          <div
            key={index}
            style={{
              marginTop: "6px",
              width: "30rem",
              height: "31rem",
              backgroundColor: obj.backgroundColor,
            }}
            className={classes.Structure}
          >
            <img src={obj.imageUrl} alt="loader-logo2" />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <button>OrderNow</button>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <h1>Order Non veg pizza online from Domino’s</h1>
        <p>
          A treat for all the meat lovers is the types of non veg pizza near me
          on the Domino’s menu. The deliciously succulent meat toppings make for
          the best meals when you’re craving chicken pizza. Many times, the
          amount of chicken on a pizza piece is not enough to satiate your
          craving for non veg pizza. But not at Domino’s pizza! The generous
          amounts of chicken chunks on your non veg pizza will not only make you
          hungry for more but the perfect flavor will leave a lasting
          impression. The day you wish to have a chicken sausage pizza, look at
          the American classic Chicken Sausage to quench your hankering. The
          highlight of the pizza menu at Domino’s is Chicken Dominator, which
          has 4 variants of chicken flavors! Ever looked at the non veg pizza
          price and gotten worried? It won’t be a problem when the chicken pizza
          price of a Non Veg Loaded pizza is 105 rupees! Whether you are a fan
          of Indian spice or Italian yumminess, the variety in the menu is sure
          to stump you. The unimaginable combination of pasta, pizza, and
          chicken is sure to delight the foodie in you. The next time you are
          looking for chicken pizza near me, head to Domino’s!
        </p>
        <h1>Order delicious chicken pizza only at Dominos</h1>
        <p>
          Want a chicken pizza with loads of veggies? It can be done! You can
          add non veg toppings to the veg pizzas and make them meaty! You can
          make the best non veg pizza by customizing toppings and adding more or
          swapping the toppings out. Domino’s guarantees that the meats will be
          juicy and tasty till they reach you when you opt for the food delivery
          near me. You can enjoy a slice of your favorites without having to
          worry about the chicken pizza price. The range of pizza and prices
          ensures all customers get the best chicken pizza. There is an
          additional treat for cheese lovers. You can add more cheese to the
          pizza or better yet, go for the cheese burst crust to enjoy a
          lip-smacking chicken cheese burst pizza. Since you don’t have to worry
          about the chicken pizza cost, you can also take your meal to the next
          level with chicken sides and cold beverages. Chicken sides include
          some gems like tacos, parcels, and burger pizzas. Domino’s has an
          entire section of the menu dedicated to specialty chicken for you to
          enjoy. The tender wings and meatballs paired with the exquisite sauces
          are enough to make you daydream about them!
        </p>
      </div>
    </Fragment>
  );
};
export default NonVegPizza;
