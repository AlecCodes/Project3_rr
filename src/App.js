import './App.css';
import Header from './Components/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer'
import {useState} from 'react'
import data from './dummydata'

function App() {
  const [formState, setFormState] = useState('')
  function changeHandler(event){
    setFormState(event.target.value)
    
    const filtered = [...data].filter((element)=>{
      if(formState.toUpperCase() === element.name.substring(0,formState.length).toUpperCase()){
        return element
      }
    })

    console.log(filtered)
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
