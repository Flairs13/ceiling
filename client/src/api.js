import * as axios from "axios";

const instance = axios.create({
                                  withCredentials: true,
                                  baseURL: "/api",
                              })


export const getProfile = () => {
    return instance.get('/profile').then(response => ({response})).catch(error => ({error}))
}

export const uploadImg = (photo,text) => {
    let formData = new FormData()
    formData.append('image', photo)
    formData.append('name',text)
    return instance.post('/uploads',formData).catch(error => console.log(error.message))
}
