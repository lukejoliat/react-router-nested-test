import { useLoaderData } from "react-router-dom";

export default () => {
  const status = useLoaderData();

  return (
    <div>
      <p>Status: {status?.online ? "Online" : "Offline"}</p>
    </div>
  );
};
