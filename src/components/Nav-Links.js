import { NavLink } from "react-router-dom";
import classes from "./Nav-Links.module.css";
import LoadImage from "../LogoImage/domino.jpg";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { useHistory } from "react-router-dom";
const NavLinks = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <NavLink to="/Auth">Login</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <img className="classes.img" src={LoadImage} alt="loader-logo" />
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/VegPizza">VEG PIZZA</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/NonVegPizza">NON VEG PIZZA</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/Beverages">BEVERAGES</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/Pasta">PASTA</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/PizzaMania">PIZZA MANIA</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink to="/BurgerPizza">BURGER PIZZA</NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler} className={classes.BtnLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavLinks;
