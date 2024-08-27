import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import "./index.css"

//opcion 1
// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })

// opcion 2
// axios.get('http://localhost:3001/notes').then( response => {
//   const notes = response.data
//   console.log(notes)
// })

//opcion 3
// axios
//   .get('http://localhost:3001/notes')
//   .then(response => {
//     const notes = response.data
//   })

createRoot(document.getElementById('root')).render(
    <App />
)
