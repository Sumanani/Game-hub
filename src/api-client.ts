import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e3521d28014349c5a7033c1bf8198e8d",
  },
});
