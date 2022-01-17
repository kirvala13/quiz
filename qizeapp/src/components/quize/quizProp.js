import React, { useRef, useState } from "react";
import Bool from "../bdm/bool";

function QuizProp({ data, click, loading, answear }) {
    const [correc, setCorrect] = useState(0)
    const [show, setShow] = useState(false)
    const [rame, setRame] = useState(true)
    const [nextBtn, setNextBtn] = useState(false)
    const clickHendler = (e) => {

        const index = data.options.indexOf(e) + 1

        if (data.type === "single" && index === answear.answer) {
            setShow(true)
            setNextBtn(true)
            setCorrect(correc + 1)
        } else if (data.type === "multiple" && index === answear.answer[0] ) {
            setShow(true)
            setNextBtn(true)
            setCorrect(correc + 1)
            
        } else if(index === answear.answer[1] &&data.type === "multiple"){  
            setCorrect(correc + 1)
            setNextBtn(true)
            setShow(true)
        }else {
            setShow(false)
            setNextBtn(true)
        }

    }
    const nextbtn = () => {
        click()
        setNextBtn(false)
        setShow(false)
        if(data.type==='multiple'){
            setRame(false)
        }
    }
    localStorage.setItem("memory", correc)

    return (
        <div className={`quiz ${show ? "correct" : ""}`}>
            <div className="correctAnswer">{correc}</div>
            {loading ? <><h1>{data.question}</h1>
                <div className="answer">
                    {rame ? data.options.map(res => {
                        return <p className="answer-button" key={res} onClick={() => clickHendler(res)}>{res}</p>
                    }) : <Bool loading={loading} data={data} show={show} answear={answear} clik={()=>click()} />}
                </div> </> : null
            }
            {nextBtn ? <button onClick={nextbtn}>next</button> : null}
        </div>
    )
}

export default QuizProp;