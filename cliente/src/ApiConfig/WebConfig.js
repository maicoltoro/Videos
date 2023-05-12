import axios from  'axios'

export const api = axios.create({
    baseURL: 'http://192.168.132.129:5000/'
})

// export const api = axios.create({
//     baseURL: 'http://localhost:5000/'
// })

// export const apiEnvio = axios.create({
//     baseURL: 'http://localhost:5000/',
//     responseType: 'arraybuffer', 
// });

export const apiEnvio = axios.create({
    baseURL: 'http://192.168.132.129:5000/',
    responseType: 'arraybuffer', 
});