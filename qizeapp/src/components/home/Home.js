import React from "react";
import "./home.css"
import {Link} from "react-router-dom"
function Home(){
    const linkStyle={
        textDecoration:"none",
    }
    return(
        <div className="start-container">
             <Link style={linkStyle} to='/history'><p className="homeBtn">See History</p></Link>
         <h1 className="description">Hello this is Quiz game</h1>
         <button><Link to="/quiz" className="start">start</Link></button>
        </div>
    )
}

export default Home;