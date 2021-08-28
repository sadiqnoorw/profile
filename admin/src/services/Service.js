import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiLoginClient = axios.create({
  baseURL: `http://127.0.0.1:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
})

export default {
  // post registion information here
  postRegistion(userInf) {
    return apiClient.post('/register', userInf)
  },

  // user login 
  login(loginInfo) {
    //console.log(loginInfo)
    return apiClient.post('/login', loginInfo)
  },

  // user login 
  user() {
    //console.log(loginInfo)
    return apiLoginClient.get('/user')
  }
}
