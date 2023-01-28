import './App.css';
import Header from './Components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer'
import ScrollButton from './Components/ScrollButton';
//import data from './dummydata'



function App() {
  localStorage.setItem('token',JSON.stringify({token: null, username:"Anonymous eater"}))

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
