import axios from 'axios';


const url = 'http://localhost:8080/persona/api/v1/';

export const getAll = async () => {

    const resp = await axios.get(url + 'all');

    return resp;
};
