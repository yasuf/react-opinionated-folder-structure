import axios from 'axios';

export const getDog = () => {
  return axios.get("https://random.dog/woof.json")
}
