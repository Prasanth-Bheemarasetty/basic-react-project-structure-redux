import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthStateType, authStoreActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { localStorageKeys } from "misc/LocalStorageKeys";

export default function LoginPage() {
  // Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Getting userName & userType from redux store
  const userName = useSelector((state: AuthStateType) => state.userName);
  const userType = useSelector((state: AuthStateType) => state.userType);

  // Handling Login
  const handleLogin = () => {
    // Store username, password & usertype into localstorage
    localStorage.setItem(localStorageKeys.userType, userType);
    localStorage.setItem(localStorageKeys.userName, userName);

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
          value="Login"
          onClick={handleLogin}
          style={{
            alignSelf: "flex-end",
          }}
        />
      </div>
    </Fragment>
  );
}
