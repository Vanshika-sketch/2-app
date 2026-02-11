import React ,{useEffect,useState}from "react";


const MyComponent =()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("My Component is mounting....")

        return function(){
            console.log("unmounting.........")
        }
    },[])
    useEffect(()=>{
        console.log("Count got updated")

        return function(){
            console.log("Returning count",count)
        }
    },[count])
    return(
        <div>
            <p>count is {count}</p>
            <button onClick={()=>setCount(count+1)}>Update </button>
        </div>
       
    )
}
export default MyComponent;