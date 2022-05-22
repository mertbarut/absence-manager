import axios from 'axios'

export default axios.create({
  baseURL: 'https://mbarut-absence-manager-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json'
  }
})