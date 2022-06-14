import { Fragment } from "react";
import HeaderImage from "../LogoImage/header.jpg";
import classes from "../Structure.module.css";
import classes2 from "./Css/NonVeg.module.css";

import PizzaM from "../PizzaMania/PizzaOne.jpg";
import PizzaS from "../PizzaMania/PizzaSecond.jpg";
import PizzaT from "../PizzaMania/PizzaThird.jpg";
import PizzaF from "../PizzaMania/PizzaForth.jpg";
import PizzaFive from "../PizzaMania/PizzaFifth.jpg";
import PizzaSix from "../PizzaMania/PizzaSixth.jpg";

const Detail = [
  {
    backgroundColor: "#eb5353",
    title: "Tomato",
    description:
      "Juicy tomato in a flavour full combination with cheese I tangy sauce",
    imageUrl: PizzaM,
  },

  {
    backgroundColor: "#00ffab",
    title: "VEG LOADED",
    description:
      "Tomato | Grilled Mushroom |Jalapeno |Golden Corn | Beans in a fresh pan crust",
    imageUrl: PizzaS,
  },

  {
    backgroundColor: "#9a86a4",
    title: "CHEESY",
    description: "Orange Cheddar Cheese I Mozzarella",
    imageUrl: PizzaT,
  },

  {
    backgroundColor: "#764af1",
    title: "CAPSICUM",
    description: "Capsicum",
    imageUrl: PizzaF,
  },

  {
    backgroundColor: "#68a7ad",
    title: "ONION",
    description: "Onion",
    imageUrl: PizzaFive,
  },

  {
    backgroundColor: "#9fc088",
    title: "GOLDEN CORN",
    description: "Golden Corn - Sweet Corn Pizza",
    imageUrl: PizzaSix,
  },
];

const PizzaMania = () => {
  return (
    <Fragment>
      <img className={classes2.img} src={HeaderImage} alt="header-img"></img>

      <div className={classes.main}>
        {Detail.map((obj, index) => (
          <div
            key={index}
            style={{
              marginTop: "5px",
              width: "30rem",
              height: "31rem",
              backgroundColor: obj.backgroundColor,
            }}
            className={classes.Structure}
          >
            <img src={obj.imageUrl} alt="pizza-Mania"></img>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <button>OrderNow</button>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <p>
          The ooh so deliciousness of pizzas and that too at your favorite brand
          wouldn’t you like to know what all they are offering so that you can
          make the most of your orders by planning them well and trying out all
          the options you would want to? Check out the Domino’s Pizza Mania!
        </p>
        <h1>Pizza Mania By Domino’s</h1>
        <p>
          As the name suggests, the pizza mania will allow you to go giddy and
          gaga over all the pizza options that are present in front of you. The
          sheer vastness and varieties would be worth drooling over. The
          amazing-ness in the tastes of these different pizzas would only lead
          to more mouth-watering goodness. From the pizza menu, you can choose
          between pizza options that will suit your taste buds. You can also
          experiment and check out the pizza mania menu for different and unique
          options that you might not have had the pleasure of trying out. You
          can never go wrong with a pizza order. This cuisine does not need a
          specific occasion or time to enjoy. Bask in the delightfulness and dig
          into the most scrumptious food near me. Sit back and relax as you can
          place your orders online or by calling the outlets and have the food
          delivered.
        </p>
        <h1>Veg Pizza Mania</h1>
        <p>
          Surround yourself with the goodness of pizzas from the pizza mania
          options with your most beloved outlet for Italian food. Decide on the
          pizzas you prefer and order asap!
        </p>
      </div>
    </Fragment>
  );
};
export default PizzaMania;
