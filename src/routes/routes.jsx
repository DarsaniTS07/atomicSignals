import React, { Children, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import { Box, CircularProgress } from "@mui/material";
const Authentication = lazy(() => import("../pages/Authentication"));
const SignUp = lazy(() => import("../components/SignUp/SignUp"));
const Login = lazy(() => import("../components/Login/Login"));
const ForgotPassword = lazy(() =>import("../components/ForgotPassword/ForgotPassword"));
const ResetPassword = lazy(() => import("../components/SignUp/ResetPassword"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Authentication />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <SignUp />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "forgot-password",
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ForgotPassword />
            </Suspense>
          ),
        },
        {
          path: "reset-password",
          element: (
            <Suspense>
              <ResetPassword />
            </Suspense>
          ),
        },
      ],
    },

    {
      path: "/dashboard",
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Layout />
        </Suspense>
      ),
      // Children={}
    },
    {
      path: "*",
      element: <h2>404- Page Not Found</h2>,
    },
  ]);
  return routes;
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
