import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params:{
        key: '25cce39518d846ce8a3fc534fdf2ea28'
    }
})