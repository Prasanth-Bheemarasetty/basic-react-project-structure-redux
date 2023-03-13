import { Fragment } from "react";
import RootPage from "./page";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/layout";
import HomeLayout from "./home/layout";

export default function RootLayout() {
  return (
    <Fragment>
      <Routes>
        <Route key="" path="" element={<RootPage />} />
        <Route key="auth" path="auth/*" element={<AuthLayout />} />
        <Route key="home" path="home/*" element={<HomeLayout />} />
      </Routes>
    </Fragment>
  );
}
