
import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: 'https://guidr1.herokuapp.com/api/', //needs to be fixed with the information I am grabbing

    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};