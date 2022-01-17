import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import QuizProp from "./quizProp";
import "./quiz.css"
import PopUp from "../popUp/popUp";
import Proggres from "../proggres";
function Quiz() {
  const [getAnswear, setAnswear] = useState([])
  const [getQuestion, setGetQuestion] = useState([])
  const [next, setNext] = useState(0)
  const [showe, setShowe] = useState(false)
  const [loading,setLoading]=useState(false)
 useEffect(()=>{
   axios.get("http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db").then(res=>{
     localStorage.setItem('quiz',JSON.stringify(res.data.questions))
     localStorage.setItem('answer',JSON.stringify(res.data.answers))
     setAnswear(JSON.parse(localStorage.getItem('answer')))
    setGetQuestion(JSON.parse(localStorage.getItem('quiz')))
    setLoading(true)
   })

 },[])


 
  const setresult = localStorage.getItem("memory")
 if(getQuestion.length === next && next>0 ){
    setShowe(true)
    setNext(next-2)
 }
  return (
    <>
      <Proggres next={next + 1} getquestion={getQuestion} />
      <div className="quiz-container">
        {
        showe ?<PopUp data={getQuestion}  result={setresult}/>:<QuizProp loading={loading} answear={getAnswear[next]}   data={getQuestion[next]} click={() => setNext(next + 1)} />
        }
      </div>
    </>

  )

}

export default Quiz;