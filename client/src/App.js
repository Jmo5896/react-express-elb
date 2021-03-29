// App.js
//
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [flower, setFlower] = useState({})

  useEffect(() => {
    const fetchData = async () => {

      const res = await axios.get('/flower')
      // console.log(res)
      setFlower(res.data)

    }
    fetchData()
  }, [])

  return (
    <div className="App">
    <h1>{flower.name}</h1>
    <p>{flower.colour}</p>
  </div>
  );
}

export default App;
