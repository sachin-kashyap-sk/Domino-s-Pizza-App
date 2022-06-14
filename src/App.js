import { Route, Switch, Redirect } from "react-router-dom";
import VegPizza from "./pages/VegPizza";
import Beverages from "./pages/Beverages";
import BurgerPizza from "./pages/BurgerPizza";
import NonVegPizza from "./pages/NonVegPizza";
import Pasta from "./pages/Pasta";
import PizzaMania from "./pages/PizzaMania";
import NavLinks from "./components/Nav-Links";
import Authentication from "./Authentication/Authentication";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      <NavLinks />
      <main>
        <Switch>
          <Route path="/" exact>
            <Authentication />
          </Route>

          {!authCtx.isLoggedIn && (
            <Route path="/Auth" exact>
              <Authentication />
            </Route>
          )}

          <Route path="/VegPizza">
            {authCtx.isLoggedIn && <VegPizza />}
            {!authCtx.isLoggedIn && <Redirect to="/Auth" />}
          </Route>

          {authCtx.isLoggedIn && (
            <Route path="/Beverages">
              <Beverages />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/BurgerPizza">
              <BurgerPizza />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/NonVegPizza">
              <NonVegPizza />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/Pasta">
              <Pasta />
            </Route>
          )}

          {authCtx.isLoggedIn && (
            <Route path="/PizzaMania">
              <PizzaMania />
            </Route>
          )}

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
