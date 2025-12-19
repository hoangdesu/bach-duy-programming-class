import axios from "axios";

// custom axios configs
export default axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true,
    headers: {
        'fking-secret-message': '=)))'
    }
});
