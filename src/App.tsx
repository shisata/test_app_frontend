import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  // const notify = () => toast("somng");


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/firstPage" element={<FirstPage/>} />
        <Route path="/secondPage" element={<SecondPage/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
