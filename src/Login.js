import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));

  };

  return (
    <div className="login">
      <Link to="/">
        {/* https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px--Amazon_logo.svg.png */}
        <img
          src="https://bn1302files.storage.live.com/y4pkfMUQa4_C7-mbN-dgLXk12086FBekeNzrkOJOzDXKuQTq01jiafag9DXMIPJaKovT_gMzP_cKwTOU2X-cxJ494xMY4NV4NoNYRC0MlDiuMaJDH39gNdMVSpyZ6OhM_BYZAvMCxwBC_MhHj7fNSEVUfCuGZ8CNeU351DbVQxTS8iRp0gtmu4HjVknTgiF8uxrcXFECc2smdp97PWJnaIxeApi0X0b9w3TCAnIfi2vdoA/KALAKALAN.png?psid=1&width=593&height=239"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in, you agree to Kalakan's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Kalakalan Account
        </button>
      </div>
    </div>
  );
}

export default Login;
