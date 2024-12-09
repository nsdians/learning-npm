import axios from 'axios'

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then((Response) => {
    console.log(Response.data)
})

