import { useLoaderData, useNavigate } from "react-router-dom";

export const Profiles = () => {
  const profiles = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <h1>Profiles List View</h1>
      <ul>
        {profiles?.map((p, i) => (
          <li key={p.name} onClick={() => navigate(`/profile/${i}`)}>
            Profile Name: {p.name}
          </li>
        ))}
      </ul>
    </>
  );
};
