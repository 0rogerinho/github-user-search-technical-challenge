// Axios
import axios from 'axios';

const url_user = 'https://api.github.com/users/';

  export const getUserData = async (username: string) => {
    const url = `${url_user}${username.trim()}`;
      const response = await axios.get(url);
      return response.data;

  };

  export const getUserRepos = async (repos_url: string) => {
    const url = `${repos_url}`;
      const response = await axios.get(url);
      return response.data;
  };
