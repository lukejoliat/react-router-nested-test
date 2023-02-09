import profiles from "../../../data/profiles.json";

export const loader = ({ params }) => {
  console.log("profile loader");
  return profiles[params.id];
};
