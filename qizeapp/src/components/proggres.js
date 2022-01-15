import React from "react";

function Proggres({next,getquestion}){
    const width = `${(next/getquestion.length)*100}%`;

    const wid={
        width:width
    }
  return(
      <div className="proggres">
       <div className="proggres-indicator" style={wid} ></div>
      </div>
  )
}

export default Proggres