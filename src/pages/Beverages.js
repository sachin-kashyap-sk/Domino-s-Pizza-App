import { Fragment } from "react";
import classes from "../Structure.module.css";
import HeaderImage from "../LogoImage/header.jpg";
import DrinkImage from "../BeveragesImages/pepsi1.jpg";
import DrinkSecond from "../BeveragesImages/pepsi2.jpg";
import DrinkThird from "../BeveragesImages/frooti.jpg";
import DrinkForth from "../BeveragesImages/real.jpg";
import DrinkFifth from "../BeveragesImages/coca.jpg";
import DrinkSixth from "../BeveragesImages/coca-cola.jpg";

const Detail = [
  {
    backgroundColor: "#eb5353",
    title: "Diet Pepsi",
    // description:
    //   "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    imageUrl: DrinkImage,
  },

  {
    backgroundColor: "#00ffab",
    title: "Pepsi Can",
    // description:
    //   "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    imageUrl: DrinkSecond,
  },

  {
    backgroundColor: "#9a86a4",
    title: "Frooti",
    imageUrl: DrinkThird,
    // description:
    //   "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  },

  {
    backgroundColor: "#764af1",
    title: "Real Juice",
    // description:
    //   "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    imageUrl: DrinkForth,
  },

  {
    backgroundColor: "#68a7ad",
    title: "Coca Cola",
    imageUrl: DrinkFifth,
  },

  {
    backgroundColor: "#9fc088",
    title: "Coca Cola can",
    imageUrl: DrinkSixth,
  },
];

const Beverages = () => {
  return (
    <Fragment>
      <img
        className={classes.headerImage}
        src={HeaderImage}
        alt="header-logo"
      />
      <div className={classes.main}>
        {Detail.map((object, index) => (
          <div
            key={index}
            style={{
              marginTop: "5px",
              width: "30rem",
              height: "31rem",
              backgroundColor: object.backgroundColor,
              
            }}
            className={classes.Structure}
          >
            <img src={object.imageUrl} alt="Drinks-logo" />
            <h3>{object.title}</h3>
            {/* <p>{object.description}</p> */}
            <button>OderNow</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Beverages;
