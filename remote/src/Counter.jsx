import {useState } from "react"
import React from "react";
function Counter()
{
    const [name,setName]=useState("Nagesh")
    function updatedata()
    {
        setName("Nagesh DC")
    }

    return(
        <div>
         <div>counter:  {name}</div>
         <button onClick={updatedata}>Update data</button>
        </div>
      
    );
}
export default Counter