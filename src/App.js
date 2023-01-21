import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
