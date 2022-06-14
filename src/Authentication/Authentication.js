import { useState, useRef, useContext } from "react"; /// use Ref for getting input data
import { AuthContext } from "../store/auth-context";
import classes from "./Authentication.module.css";
import { useHistory } from "react-router-dom";
const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALWnSz8kv8g54qY3yXQMUws11TpumKIQo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/signUpsignUpsignUpsignUpsignUpsignUp:signUp?key=AIzaSyALWnSz8kv8g54qY3yXQMUws11TpumKIQo";
      // fetch(
      //   "https://identitytoolkit.googleapis.com/v1/signUpsignUpsignUpsignUpsignUpsignUp:signUp?key=AIzaSyALWnSz8kv8g54qY3yXQMUws11TpumKIQo",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: enteredEmail,
      //       password: enteredPassword,
      //       returnSecureToken: true,
      //     }),
      //     headers: {
      //       "content-Type": "application/json",
      //     },
      //   }
      // ).then((res) => {
      //   setIsLoading(false);
      //   if (res.ok) {
      //   } else {
      //     return res.json().then((data) => {
      //       /// showing Error

      //       let errorMessage = "Authentication Failed!";
      //       // if (data && data.error && data.error.message) {
      //       //   errorMessage = data.error.message;
      //       //}
      //       alert(errorMessage);
      //     });
      //   }
      // });
    }
    fetch(
      url,
      //  "https://identitytoolkit.googleapis.com/v1/signUpsignUpsignUpsignUpsignUpsignUp:signUp?key=AIzaSyALWnSz8kv8g54qY3yXQMUws11TpumKIQo",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            /// showing Error

            let errorMessage = "Authentication Failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            //}
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // when we get the token then  change data to  authCtx
        // console.log(data);
        authCtx.login(data.idToken);

        history.replace("/VegPizza");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "signup"}</h1>
      <form onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">your Email</label>
          <input type="email" id="email" required ref={emailInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></input>
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <button> {isLogin ? "Login" : "createAccount"}</button>
          )}
          {isLoading && <p>Sending Request... </p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new Account " : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
