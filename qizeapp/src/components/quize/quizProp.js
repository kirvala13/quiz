import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"

function QuizProp({ data, click,loading}) {
    const [correc, setCorrect] = useState(0)
    const [show, setShow] = useState(false)

    const clickHendler = (e) => {

        if (e === true) {
            setCorrect(correc + 1)
            setShow(true)
        } else {
            console.log("brt")
            setShow(false)
        }

        if (data.type === "single") {
            setTimeout(() => {
                click()
                setShow(false)
            }, 800)
        } else if (data.type === "multiple") {
            console.log()
            setTimeout(() => {
                click()
                setShow(false)
            }, 4000)

        } else if (data.type === "boolean") {
            setTimeout(() => {
                click()
                setShow(false)
            }, 1000)
        } else {
            click()
        }


    }
    
    localStorage.setItem("memory", correc)

    return (
        <div className="quiz">
            <div className="correctAnswer">{correc}</div>
          {loading?<><h1>{data.question}</h1>
            <div className="answer">
                {data.options.map(res => {
                    return <p className={`answer-button ${show && res.correct ? "correct" : ""}`} key={res.სავარაუდოპასუხი} onClick={() => clickHendler(res.correct)}>{res.სავარაუდოპასუხი}</p>
                })}
            </div> </> :null
           
         }
        </div>
    )
}

export default QuizProp;