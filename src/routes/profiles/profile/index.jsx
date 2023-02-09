import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

const Profile = () => {
  const profile = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <h1>Profile View</h1>
      <p>Name: {profile.name}</p>
      <div>
        <button onClick={() => navigate("status")}>Status</button>
        <button onClick={() => navigate("info")}>Info</button>
      </div>
      <Outlet />
    </>
  );
};

export default Profile;
