import './App.css';
import Header from './Components/Header'
import {Outlet, useLoaderData} from 'react-router-dom'
import Footer from './Components/Footer'
import Rating from './Components/Rating'
import {useState} from 'react'
//import data from './dummydata'

function App() {
  const data = useLoaderData()
  const [dataState, setDataState] = useState(data)
  const [formState, setFormState] = useState('')
  function changeHandler(event){
    setFormState(event.target.value)
    
    const filtered = [...data].filter((element)=>{
      if(formState.toUpperCase() === element.name.substring(0,formState.length).toUpperCase()){
        return element
      }
    })
    // console.log('VVVVV - Change handler executed - VVVVVVVV')
    // console.log(filtered)
    setDataState(filtered)

  }

  return (
    <div className="App">
      <Header value={formState} onChange={changeHandler}/>
      <Outlet context={dataState} />
      <Rating />
      <Footer/>
    </div>
  );
}

export default App;
