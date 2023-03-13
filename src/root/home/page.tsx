import { localStorageKeys } from "misc/LocalStorageKeys";
import { Fragment } from "react";

export default function HomePage() {
  let userName = localStorage.getItem(localStorageKeys.userName);
  let userType = localStorage.getItem(localStorageKeys.userType);
  console.log(userName);
  return (
    <Fragment>
      <h1>
        Welcome {userName} : {userType}
      </h1>
    </Fragment>
  );
}
