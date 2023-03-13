import React from "react";
import { Provider } from "react-redux";
import "./auth.css";
import { authStore } from "./store";
import { Route, Routes } from "react-router-dom";
import UserTypeLayout from "./[userType]/layout";

export default function AuthLayout() {
  return (
    <Provider store={authStore}>
      <div
        style={{
          margin: "0px 0px",
        }}
      >
        <div
          id="auth-header"
          style={{
            padding: "15px 20px",
            boxShadow: "0 8px 6px -6px black",
            marginBottom: "20px",
          }}
        >
          <h2>Authentication</h2>
        </div>
        <div id="auth-body" style={{ margin: "0px 20px" }}>
          <Routes>
            <Route key="" path=":userType/*" element={<UserTypeLayout />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
