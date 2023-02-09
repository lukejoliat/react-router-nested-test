import { Outlet, useLoaderData } from "react-router-dom";

const Profile = () => {
  const profile = useLoaderData();
  return (
    <>
      <h1>Profile View</h1>
      <p>Name: {profile.name}</p>
      <Outlet />
    </>
  );
};

export default Profile;
