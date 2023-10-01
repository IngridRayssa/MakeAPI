import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1'
})