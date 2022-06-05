import axios from "axios";

const KEY = "AIzaSyCFZzRK_0djV4H8QHwSw0CfGogqTlPYhcw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
