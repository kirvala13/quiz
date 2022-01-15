import React from "react";

function HistoryProp({ data }) {
    return (
        <>
            {data.map(res => {
                return (<tbody key={res.date}>
                    <tr>
                        <td>{res.reult}</td>
                        <td>{res.date}</td>
                    </tr>
                </tbody>
                )
            })}

        </>
    )
}

export default HistoryProp