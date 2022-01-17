import React from "react";

function Bool({data, correc,loading,show,clicked,answear}) {
    if(answear===true){
        console.log("soso")
    }
    return (
        <div className="quiz">
            <div className="correctAnswer">{correc}</div>
            {loading ? <>
                <div className="answer">
                <p className={`answer-button ${show  ? "correct" : ""}`} key={data.question} onClick={clicked}>{data.question}</p>
                </div> </> : null

            }
        </div>
    )
}

export default Bool