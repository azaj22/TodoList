import React, { useState } from "react"


const TodoList = () => {
    
     
    const [activity ,  setActivity]=useState("")
    const [listData, setlistData] =useState([])
    const addActivity=()=>{
       // setlistData([...listData,activity])
        //console.log(listData)
        setlistData((listData) =>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }
    const removeActivity=(i)=>{
        const updatedlistData=listData.filter((ele,id)=>{
            return i!=id;
        })
setlistData(updatedlistData)
    }
    const AllDelete=()=>{
        setlistData([])
    }
    return (
        <>
        <div className="container">
            <div className="header"> TodoLIst</div>
            <input type='text' placeholder="Add Activity" value={activity }  onChange={(e)=>setActivity(e.target.value)}/>
            <button onClick={addActivity}>Add </button>
           

            <p className="list-heading">here is your list:{")"}</p>
{listData!=[] && listData.map((data,i)=>{
    return(
    <>
    <p key={i}>
        <div className="listdata">{data}</div>
       <div className="btn-position"> <button onClick={()=>removeActivity(i)}>delete</button></div> </p>
    </>
  )})
}
{listData.length>=1 && <button onClick={AllDelete}> All Delete</button>}</div> </>  )
}
export default TodoList
