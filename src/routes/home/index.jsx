import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to the profiles app.</h1>
      <button onClick={() => navigate("/profiles")}>Profiles</button>
    </>
  );
};
