import './App.css';
import Header from './Components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer'
import {useState} from 'react'

function App() {
  const [formState, setFormState] = useState('')
  function changeHandler(event){
    setFormState(event.target.value)
  }

  return (
    <div className="App">
      <Header value={formState} onChange={changeHandler}/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
