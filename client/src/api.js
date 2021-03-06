import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: '/api',
})

export const getItemArr = (route) => {
  return instance
    .get(`/${route}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
}

export const uploadItem = (payload, route) => {
  let formData = new FormData()
  Object.entries(payload).forEach((i) => {
    if (i[0] === 'file') {
      formData.append(`image`, i[1])
    } else {
      formData.append(`${i[0]}`, i[1])
    }
  })
  return instance
    .post(`/${route}`, formData, {
      headers: { 'Content-type': 'multipart/form-data' },
    })
    .then((response) => ({ response }))
    .catch((error) => console.log(error.message))
}

export const updateItem = (payload, route, id) => {
  let formData = new FormData()
  formData.append('_id', id)
  Object.entries(payload).forEach((i) => {
    if (i[0] === 'file') {
      formData.append(`image`, i[1])
    } else {
      let value = i[1]
      if (value === null) {
        value = ''
      }
      formData.append(`${i[0]}`, value)
    }
  })
  return instance
    .put(`/${route}`, formData, {
      headers: { 'Content-type': 'multipart/form-data' },
    })
    .then((response) => ({ response }))
    .catch((error) => console.log(error.message))
}

export const deleteItem = (id, route) => {
  return instance
    .delete(`/${route}/:${id}`)
    .then((response) => ({ response }))
    .catch((error) => ({ error }))
}
