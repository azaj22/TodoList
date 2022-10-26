import React, { useEffect, useState } from "react"



const sum = () => {
    const [count, setCount]=useState(0)

    useEffect(()=>{
        document.title="hi how are{count}"
    })
    return (
        <div >
          

           <h1> home</h1>
<button onClick={()=>setCount(count+1)}></button>

        </div>
    )

}


export default sum
