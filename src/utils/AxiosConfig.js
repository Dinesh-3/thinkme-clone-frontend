import axios from 'axios';

axios.defaults.baseURL = 'https://thankme-backend.herokuapp.com/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default axios;
