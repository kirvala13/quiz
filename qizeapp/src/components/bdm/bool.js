import { click } from "@testing-library/user-event/dist/click";
import React,{useState} from "react";

function Bool({data, correc,loading,answear,clik}) {
   const[discr,setDiscr]=useState(false)

        if(answear.answer===true){
            setTimeout(()=>{
                setDiscr(true)
                
            },1000)  
            setTimeout(()=>{
                clik()
            },3000)  
        }

    console.log(answear)
    return (
        <div className="quiz">
            <div className="correctAnswer">{correc}</div>
            {loading ? <>
                <div className="answer">
                <p className={`answer-button ${discr  ? "correct" : ""}`} key={data.question} >{data.question}</p>
                </div> </> : null

            }
        </div>
    )
}

export default Bool