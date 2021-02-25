import * as axios from "axios";

const instance = axios.create({
                                  withCredentials: true,
                                  baseURL: "/api",
                              })


export const getItemArr = route => {
    return instance.get(`/${route}`).then(response => ({response})).catch(error => ({error}))
}

export const uploadImg = (photo,text) => {
    let formData = new FormData()
    formData.append('image', photo)
    formData.append('name',text)
    return instance.post('/uploads',formData,{ headers: { 'Content-type': 'multipart/form-data' }}).then(res => {
        debugger
        console.log (res)
    }).catch(error => console.log(error.message))
}

