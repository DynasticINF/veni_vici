import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'Axios';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
 


function App() {
  let url = `https://api.thecatapi.com/v1/images/search?&${ACCESS_KEY}&has_breads=1`

  const fetchData = async() => {
    const response = await axios.get(url);
    console.log(response.data);
  }
  
  fetchData();

  return (
    <div className="App">
      <h1>Show that Cat!</h1>
      <button className='discoverPet'>Discover Cat </button>

    </div>
  )
}

export default App
