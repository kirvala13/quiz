import React, { useState } from "react";
import { Link } from "react-router-dom";
import HistoryProp from "./histotyProps";
import './history.css'
function History() {
    const [best, setBest] = useState([])
    const linkStyle={
        textDecoration:"none",
    }
    const getlocal = JSON.parse(localStorage.getItem('data'))
    getlocal.sort((a, b) => {
        if (a.reult === b.reult) {
            let ab = new Date(a.date),
                db = new Date(b.date)
            return ab - db

        }
        return a.reult - b.reult

    })
    console.log(getlocal)

    return (
        <div className="history-page">
         <Link style={linkStyle} to='/'><p className="homeBtn">Back to home</p></Link>
            <h1>The best result</h1>
            <div className="result-container">
                <table>
                    <thead>
                        <tr>
                            <th>Result</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <HistoryProp data={getlocal} />
                </table>
            </div>
        </div>
    )
}


export default History