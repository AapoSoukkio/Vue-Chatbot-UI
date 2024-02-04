import axios from 'axios';

import { AxiosInstance } from 'axios';

const Api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export { Api };