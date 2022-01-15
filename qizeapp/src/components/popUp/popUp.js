import React from "react";
import "./popup.css"
import{Link} from "react-router-dom"
function PopUp({data,result}){
  
if(localStorage.getItem('data')===null){
   localStorage.setItem('data', "[]")
} 

const sendHistory=()=>{
   const obj={
      "reult":result,
      "date": new Date()
   }

 const oldData = JSON.parse(localStorage.getItem('data'))
 oldData.push(obj)
 localStorage.setItem('data',JSON.stringify(oldData))
}
  
   
  
   return(
       <div className="popUp">
         <div className="result-container">
            <h1>{`${result}/${data.length}`}</h1>
         </div>
          <h1>Do you want to save this attempt?</h1>
          <div className="button-container">
          <Link to='/history' className="noCLick" onClick={sendHistory}> <button>yes</button></Link>
          <Link to='/' className="noCLick" > <button>No</button></Link>
          </div>
          
       </div>
   )
}

export default PopUp