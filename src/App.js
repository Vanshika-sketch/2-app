import React ,{useEffect,useState} from "react";
import './App.css';
import MyComponent from "./MyComponents";


function App(){
  const[isVisible,setVisible]=useState(true)




  useEffect(()=>{
    console.log("i'm mountainggg....")
  },[])
  return <div className = "app">
{isVisible?<MyComponent/>:<></>}
    <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
  </div>
}



export default App;
