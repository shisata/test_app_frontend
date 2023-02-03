import { Counter } from './features/counter/Counter';
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';

export default function SecondPage(){
  const navigate = useNavigate();
  async function fetchData(){
    try{
      const fetchResult = await axios.get(`https://test-app-6ywq.onrender.com/api/games/`)      
      // const fetchResult = await axios.get(`${url}/api/games/`)
      console.log(fetchResult.data)
      return fetchResult.data
    }catch(error){
      console.log("Catched error!: ", error)
      return error
    }
  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
      .then((result) => console.log(result))
  }, [])
  
  return(
    <div className="FirstPage">
      <header className="App-header">
      <h1>SecondPage</h1>
        <Counter />

        {/*****************/}
        <Link to={`/firstPage`} replace={true}>
          <div>
            <p>redirect with Link</p> 
          </div>
        </Link>

        <div>
            <p onClick={() => {navigate("/firstPage")}}>redirect with useNavigate</p> 
        </div>
        {/*****************/}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}