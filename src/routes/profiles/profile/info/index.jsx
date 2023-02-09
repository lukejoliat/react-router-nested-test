import { useLoaderData } from "react-router-dom";
import profiles from "../../../../data/profiles.json";

export default () => {
  const info = useLoaderData();

  return (
    <div>
      <p>Info: {info}</p>
    </div>
  );
};
