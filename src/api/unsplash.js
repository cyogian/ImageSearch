import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID cd4bab2bbe1c12db1b41dfdcdf3d759da44c88b087baae796c269ade7070703b`
    }
});