import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:"http://dummyjson.com"
})