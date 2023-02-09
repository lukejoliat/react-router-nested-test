import profiles from "../../../../data/profiles.json";

export const loader = ({ params }) => {
  console.log("status loader");
  return profiles[params.id]?.status;
};
