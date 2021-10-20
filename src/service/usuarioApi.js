import axios from 'axios';

const url = 'http://localhost:8080/user';


const usuarioApi = axios.create({ baseURL: url });


export default usuarioApi;