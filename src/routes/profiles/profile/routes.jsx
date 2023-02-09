import React, { Suspense } from "react";
import { loader as profileInfoLoader } from "./info/loader";
import { loader as profileStatusLoader } from "./status/loader";
const ProfileInfo = React.lazy(() => import("./info"));
const ProfileStatus = React.lazy(() => import("./status"));

export const routes = [
  {
    path: "info",
    element: (
      <Suspense>
        <ProfileInfo />
      </Suspense>
    ),
    loader: profileInfoLoader,
  },
  {
    path: "status",
    element: (
      <Suspense>
        <ProfileStatus />
      </Suspense>
    ),
    loader: profileStatusLoader,
  },
];
