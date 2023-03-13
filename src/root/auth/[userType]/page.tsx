import { localStorageKeys } from "misc/LocalStorageKeys";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthStateType, authStoreActions } from "../store";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Getting userName & userType from redux store
  const userName = useSelector((state: AuthStateType) => state.userName);
  const userType = useSelector((state: AuthStateType) => state.userType);

  // Handling Signup
  const handleSignup = () => {
    // Store username, password & usertype into localstorage
    localStorage.setItem(localStorageKeys.userType, userType);
    localStorage.setItem(localStorageKeys.userName, userName);

    console.log(window.location.pathname);
    // Redirect to "/home"
    navigate("/home");
  };
  return (
    <Fragment>
      <div className="auth-container">
        <input
          className="auth-text-field"
          type="text"
          placeholder="Enter User name"
          value={userName}
          onChange={(event) => {
            dispatch(authStoreActions.setUserName(event.target.value));
          }}
        />
        <input
          className="auth-text-field"
          type="password"
          placeholder="Enter Password"
        />
        <input
          type="button"
          className="auth-button"
          value="Sign Up"
          onClick={handleSignup}
          style={{
            alignSelf: "flex-end",
          }}
        />
        <p>
          Already Signed Up? Go to{" "}
          <Link to={"login"} style={{ textDecorationLine: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
