import { Fragment } from "react";
import classes from "../Structure.module.css";
import LoaderImage from "../LogoImage/header.jpg";
import LoadImage from "../LogoImage/VegFirst.jpg";
import pizzaSecond from "../LogoImage/vegSecond.jpg";
import pizzaThird from "../LogoImage/VegThird.jpg";
import PizzaForth from "../LogoImage/VegForth.jpg";
import PizzaFifth from "../LogoImage/VegFifth.jpg";
import PizzaSixth from "../LogoImage/VegSixth.jpg";
import PizzaSeven from "../LogoImage/VegSeven.jpg";
import PizzaEight from "../LogoImage/VegEight.jpg";

const VegPizza = () => {

  return (
    <Fragment>
      <img
        className={classes.headerImage}
        src={LoaderImage}
        alt="header-logo"
      />

      <div className={classes.Structure}>
        <img src={LoadImage} alt="loader-logo2" />
        <h3>FARM HOUSE</h3>
        <p>
          A hugely popular margherita, with a deliciously tangy single cheese
          topping
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureSecond}>
        <img src={pizzaSecond} alt="loader-logo2" />
        <h3>PEPPY PANEER</h3>
        <p>
          Chunky paneer with crisp capsicum and spicy red pepper - quite a
          mouthful!
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureThird}>
        <img src={pizzaThird} alt="loader-logo2" />
        <h3>MEXICAN GREEN WAVE</h3>
        <p>
          A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and
          jalapeno with a liberal sprinkling of exotic Mexican herbs.
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureForth}>
        <img src={PizzaForth} alt="loader-logo2" />
        <h3>DELUXE VEGGIE</h3>
        <p>
          For a vegetarian looking for a BIG treat that goes easy on the spices,
          this one's got it all.. The onions, the capsicum, those delectable
          mushrooms - with paneer and golden corn to top it all.
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureFifth}>
        <img src={PizzaFifth} alt="loader-logo2" />
        <h3>VEGGIE PARADISE</h3>
        <p>Goldern Corn, Black Olives, Capsicum & Red Paprika</p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureSixth}>
        <img src={PizzaSixth} alt="loader-logo2" />
        <h3>FRESH VEGGIE</h3>
        <p>Onion & Capsicum</p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureSeven}>
        <img src={PizzaSeven} alt="loader-logo2" />
        <h3>INDI TANDOORI PANEER</h3>
        <p>
          It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with
          capsicum I red paprika I mint mayo
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureEight}>
        <img src={PizzaEight} alt="loader-logo2" />
        <h3>VEG EXTRA VAGANZA</h3>
        <p>
          A pizza that decidedly staggers under an overload of golden corn,
          exotic black olives, crunchy onions, crisp capsicum, succulent
          mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go
          all around.
        </p>
        <button>OrderNow</button>
      </div>

      <div className={classes.StructureNinth}>
        <img src={PizzaSixth} alt="loader-logo2" />
        <h3>FRESH VEGGIE</h3>
        <p>Onion & Capsicum</p>
        <button>OrderNow</button>
      </div>
      <div className={classes.footer}>
        <h1>Treat Yourself to Delicious Domino’s Veg Pizzas</h1>
        <p>
          If you love pampering your taste buds with the best pizza flavors in
          town, you’ll fall in love with the exciting range of veg Domino’s
          pizzas. From freshly sourced veggies to 100% authentic mozzarella
          cheese- our veg pizzas have everything to satisfy your pizza cravings.
        </p>
        <h1>Order Veg Pizza Online from Domino’s</h1>
        <p>
          Gone are the old days when people had to step out of their houses to
          enjoy a slice of freshly baked pizza. To ensure you enjoy the
          fantastic flavors of our veg pizzas right at the comfort of your home,
          we provide super quick home delivery for all our pizzas. You just have
          to browse the Domino’s veg pizza menu to pick the pizza(s), and add it
          to the cart. You can then complete your payment to place the order
          successfully. A delivery executive from our side will ensure you
          receive your ordered pizza hot and fresh within 30 minutes. All our
          vegetarian pizza range is made on order, so you can feel the freshness
          in every bite. You can download our official Domino’s mobile app from
          Play Store or use our website to place your order of a Domino’s veg
          pizza of your choice. Irrespective of the veg pizza type you choose
          for yourself, you’re sure to love it. Chefs at Domino’s use the
          freshest ingredients to prepare all the ordered pizzas, along with a
          few secret herbs. It is what separates Domino’s pizzas from others. If
          all this made you drool, search for a Domino’s restaurant near me and
          place your order today.
        </p>
        <h1>Wide Range of Veg Pizzas to lure your tastebuds</h1>
        <p>
          Had enough of ordering the same Domino’s veg pizza on loop? Well, we
          have good news for you. To ensure you never really run out of options
          or stick with a limited few, we have curated a menu of veg pizza type
          you just can’t get enough of. Every veg pizza on our menu is equally
          delicious and drool-worthy. Don’t believe us? Take a look at the veg
          pizza names list shared below, and you’ll surely drool over every
          option.
        </p>
      </div>
    </Fragment>
  );
};
export default VegPizza;
