import { Fragment } from "react";

import classes from "../Structure.module.css";
import classes2 from "./Css/NonVeg.module.css";

import HeaderImage from "../LogoImage/header.jpg";
import Burger from "../BurgerImages/Burger.jpg";
import BurgerSecond from "../BurgerImages/BurgerSecond.jpg";
import BurgerThird from "../BurgerImages/BurgerThird.jpg";

const Detail = [
  {
    backgroundColor: "#eb5353",
    title: "BURGER PIZZA- CLASSIC VEG",
    description:
      "Bite into delight! Witness the epic combination of pizza and burger with our classic Burger Pizza, that looks good and tastes great!",
    imageUrl: Burger,
  },

  {
    backgroundColor: "#9a86a4",
    title: "BURGER PIZZA- CLASSIC NON VEG",
    description:
      "For all the meat cravers, try the classic non-veg Burger Pizza loaded with the goodness of burger and the greatness of pizza. ",
    imageUrl: BurgerSecond,
  },

  {
    backgroundColor: "#00ffab",
    title: "BURGER PIZZA- PREMIUM VEG",
    description:
      "The good just got better! Treat yourself to the premium taste of the Burger Pizza, that looks good and tastes great with paneer and red paprika.",
    imageUrl: BurgerThird,
  },
];

const BurgerPizza = () => {
  return (
    <Fragment>
      <img className={classes2.img} src={HeaderImage} alt="Header" />
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
            <img src={obj.imageUrl} alt="Burger"></img>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <button>OrderNow</button>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <p>
          Burger Pizza’! Yes, you heard that right. The curiosity and intrigue
          must be bubbling up as you hear about a combination of the two
          tastiest delicacies preferred by today’s generation offered by the one
          and only Domino’s
        </p>
        <h1>Domino’s Burger Pizza</h1>
        <p>
          Only reading or hearing these two words together sparks up a feeling
          to want to try what this amazing and mysterious dish could be. Well,
          it is exactly as it sounds, only it tastes much better. The feeling of
          goodness just becomes even more enhanced as you embark on this amazing
          journey with each bite of Domino’s burger pizza. Your favorite pizza
          brand is known for its yummy dishes and amazing delicacies. Now, it is
          also known for its innovative characteristics. Who would have thought
          that they would be able to combine their two favorite dishes and enjoy
          them as one? Along with this main pizza order, you can also indulge in
          the famous non veg pasta offered by Domino’s. If you are a hardcore
          meat lover, you will not be disappointed by the variety of options
          available. Order the chicken parcel online and get it delivered to
          your doorstep.
        </p>
        <h1>Order Burger Pizza Online From The Nearest Domino’s</h1>
        <p>
          What are you waiting for? Hurry up and try out this burger pizza near
          you. With a massive amount of cheese with all of its chewiness and
          softness, you are sure to squeal in delight as you take your first
          bite. The taste is, of course, amazing, but the looks of this burger
          pizza nearby are also Instagram-worthy. You will not be able to resist
          posting a picture and raving about the deliciousness of this
          particular food delivery. You can choose to top up your order with
          different side dishes and beverages. Just as the combination of burger
          and pizza, this would be a combination of sweet and savory. There are
          several viable options using which you can order burger pizza,
          Domino’s has made it feasible and comfortable for everyone. The
          classic option is always available, you can choose to go to
          restaurants nearby and dine-in along with your friends and family.
          Enjoy the variety of options on the menu in front of you as you sit in
          the aroma of delicious baked food all around you. You can also choose
          to buy burger pizza online and order food from the online apps created
          by Domino’s.
        </p>
      </div>
    </Fragment>
  );
};
export default BurgerPizza;
