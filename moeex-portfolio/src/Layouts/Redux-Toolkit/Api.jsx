// api.js
import axios from 'axios';
import { setData } from './dataReducer';
import store from './store';

const fetchData = async () => {
  try {
    const response = await axios.get('https://64773bd19233e82dd53b3989.mockapi.io/crud-react-app');
    store.dispatch(setData(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
