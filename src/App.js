import './App.css';
import Header from './Components/Header'
import {Outlet, useLoaderData} from 'react-router-dom'
import Footer from './Components/Footer'
import Rating from './Components/Rating'
import {useState} from 'react'
import ScrollButton from './Components/ScrollButton';
//import data from './dummydata'

function App() {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <ScrollButton/>
      <Footer/>
    </div>
  );
}

export default App;
