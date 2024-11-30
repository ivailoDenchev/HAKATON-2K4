import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

const App = () => {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8020/api/users");
    console.log(response.data.users);
    setArray(response.data.users);
  }

  useEffect(() => {
    fetchAPI()
  }, [])
  return (
    <div>
      <section>
        <p>
          {array.map((user, index) => (
          <>
            <span key={index}>{user}</span>
            <br></br>
            </>
          ))}
        </p>
      </section>
    </div>
  )
}

export default App;

