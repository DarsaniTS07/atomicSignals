import React, { Children, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Box, CircularProgress } from "@mui/material";

const Authentication = lazy(() => import("../pages/Authentication"));
const SignUp = lazy(() => import("../components/SignUp/SignUp"));
const Login = lazy(() => import("../components/Login/Login"));
const ForgotPassword = lazy(() =>import("../components/ForgotPassword/ForgotPassword"));
const ResetPassword = lazy(() => import("../components/ResetPassword/ResetPassword"));
const Profile = lazy(() => import("../components/Profile/Profile"));
const Team = lazy(() => import("../components/Team/Team"));
const Feedback = lazy(() => import("../components/Feedback/Feedback"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Authentication />,
      children: [
        {
          path: "/",
          element: 
              <SignUp />
        },
        {
          path: "login",
          element: 
              <Login />
        },
        {
          path: "forgot-password",
          element: 
              <ForgotPassword />
        },
        {
          path: "reset-password",
          element: 
              <ResetPassword />
        },
      ],
    },

    {
      path: "/dashboard",
      element: 
          <Layout />,
      children:[
        {
          path:"profile",
          element:
          <Profile/>
        },
        {
          path:"team",
          element:
          <Team/>
        },
        {
          path:"feedback",
          element:
          <Feedback/>
        }
      ]
    },
    {
      path: "*",
      element: <h2>404- Page Not Found</h2>,
    },
  ]);
  return (
    <Suspense fallback={<LoadingFallback/>}>
      {routes}
    </Suspense>
  );
};

const LoadingFallback = () => {
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>;
};

export default Routes;
