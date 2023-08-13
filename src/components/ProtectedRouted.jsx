// import { useState } from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoutes = () => {
//   const useAuth = () => {
//     const [user, setUser] = useState(true);
//     return user;
//   };

//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Navigate to={"/signin"} />;
// };

// export default ProtectedRoutes;

// import React, { useEffect, useState } from "react";
// import { Route, useNavigate } from "react-router-dom";
// export const ProtectedRoute = (props) => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkUserToken = () => {
//     const userToken = localStorage.getItem("user-token");
//     if (!userToken || userToken === "undefined") {
//       setIsLoggedIn(false);
//       return navigate("/auth/login");
//     }
//     setIsLoggedIn(true);
//   };
//   useEffect(() => {
//     checkUserToken();
//   }, [isLoggedIn]);
//   return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
// };
