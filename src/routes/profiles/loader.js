import profiles from "../../data/profiles.json";

export const loader = () => {
  console.log("profiles loader");
  return profiles;
};
