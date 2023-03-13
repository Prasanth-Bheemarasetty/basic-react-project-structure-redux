import { Route, Routes, useParams } from "react-router-dom";
import SignUpPage from "./page";
import LoginLayout from "./login/layout";
import { useDispatch } from "react-redux";
import { authStoreActions } from "../store";
import { useEffect } from "react";

export default function UserTypeLayout() {
  // Hooks
  const dispatch = useDispatch();

  // Getting userType from params
  const { userType } = useParams();

  // Setting userType in Redux
  useEffect(() => {
    dispatch(authStoreActions.setUserType(userType!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route key="" path="" element={<SignUpPage />} />
      <Route key="login" path="login/*" element={<LoginLayout />} />
    </Routes>
  );
}
