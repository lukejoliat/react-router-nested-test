import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "./home";
import { Profiles } from "./profiles";
import { loader as profileLoader } from "./profiles/profile/loader";
import { loader as profilesLoader } from "./profiles/loader";
import { routes as profileRoutes } from "./profiles/profile/routes";
const Profile = React.lazy(() => import("./profiles/profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profiles",
        element: <Profiles />,
        loader: profilesLoader,
      },
      {
        path: "profile/:id",
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        ),
        loader: profileLoader,
        children: profileRoutes,
      },
    ],
  },
]);
