import React ,{useEffect,useState}from "react";

const Timer=()=>{
    const[time,setTime]=useState(0);


    useEffect(()=>{
        console.log("adding new interval")
        const timer =setInterval(()=>setTime(time+1),1000);

        return function(){
            console.log("clear old interval")
            clearInterval(timer)

        }

    },[time])
    return(
        <div>
            <h1>Stopwatch</h1>
            <p>Current time is {time}</p>
        </div>
    )
  
}
export default Timer;