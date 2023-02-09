import profiles from "../../../../data/profiles.json";

export const loader = ({ params }) => {
  console.log("info loader");
  return profiles[params.id]?.info;
};
