import Axios from "axios";

const BandsInTownAPI = Axios.create({
  baseURL: "https://rest.bandsintown.com",
});

export default BandsInTownAPI;
