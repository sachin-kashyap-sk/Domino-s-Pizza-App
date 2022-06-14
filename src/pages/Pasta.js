import { Fragment } from "react";
import HeaderImage from "../LogoImage/header.jpg";
import classes from "../Structure.module.css";
import classes2 from "./Css/NonVeg.module.css";
import pastaImage from "../PastaImages/pasta1.jpg";
import pastaSecond from "../PastaImages/pasta2.jpg";
import pastaThree from "../PastaImages/pasta3.jpg";
import pastaFour from "../PastaImages/pasta4.jpg";
import pastaFive from "../PastaImages/pasta5.jpg";
import pastaSix from "../PastaImages/pasta6.jpg";

const Detail = [
  {
    backgroundColor: "#eb5353",
    title: "Spaghetti",
    description:
      "spaghetti, long cordlike form of pasta. It is best known from Italian cuisine, where it is made from purified middlings of durum wheat (semolina).",
    imageUrl: pastaImage,
  },

  {
    backgroundColor: "#00ffab",
    title: "Italian Pasta",
    description:
      "That is rolled out and cut into various shapes. Pasta is cooked in water and served with a sauce.",
    imageUrl: pastaSecond,
  },

  {
    backgroundColor: "#9a86a4",
    title: "Carbonara",
    description:
      "Pasta carbonara is an indulgent yet surprisingly simple recipe",
    imageUrl: pastaThree,
  },

  {
    backgroundColor: "#764af1",
    title: "Boiled Pasta",
    description:
      " Pasta is such a simple ingredient, pairing well with just about any spice, flavor, or protein",
    imageUrl: pastaFour,
  },

  {
    backgroundColor: "#68a7ad",
    title: "Plain Pasta",
    description:
      " Pasta pairing well with just about any spice, flavor, or protein",
    imageUrl: pastaFive,
  },

  {
    backgroundColor: "#9fc088",
    title: "pennePasta",
    description:
      " Penne is an extruded type of pasta with cylinder-shaped pieces, their ends cut at an angle.",
    imageUrl: pastaSix,
  },
];

const Pasta = () => {
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
              marginTop: "5px",
              width: "30rem",
              height: "31rem",
              backgroundColor: obj.backgroundColor,
            }}
            className={classes.Structure}
          >
            <img src={obj.imageUrl} alt="Pizza" />
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
            <button>OrderNow</button>
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        <h1>Craving for Pasta? Time to try Domino's Pasta</h1>
        <p>
          Nothing can beat the happiness of unpacking a bowl of freshly made
          pasta dressed with a dash of tangy tomato sauce or a creamy white
          sauce, with a sprinkle of the right amount of seasoning along with a
          dose of cheese. Already searching for restaurants near me? Then
          welcome to a wide selection of rich, creamy veg and Chicken pasta that
          you can drool on; wait no more to simply get a taste of authentic
          Italian flavors with an Indian tanginess.
        </p>
        <h1>Chicken pasta</h1>
        <p>
          ⮚ Flavors from across the world: Non-veg lovers now have a reason to
          celebrate because Domino’s pasta has three exclusive chicken
          variations. For those who want to relish a fierce smoky taste, try the
          rich Moroccan spice pasta Or that authentic Indian tikka masala
          flavor, or a portion of traditional creamy pasta. Domino’s scores well
          in getting pasta recipes from across the world to your platter. ⮚
          Choose your Pasta type: Select from the You get to choose from the
          three signature pasta types. Creamy tomato pasta Non-Veg Tikka Masala
          pasta Non-Veg Moroccan spice pasta Non-Veg ⮚ Great taste comes home in
          under 30 minutes: Domino’s ensures you have your favorite food on time
          everytime in just under 30 minutes. You can now team them with
          fun-filled chicken pizzas, crispy sides, and a delicious dessert to
          make a complete meal.
        </p>
      </div>
    </Fragment>
  );
};

export default Pasta;
