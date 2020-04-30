import React from 'react';


const Alert = ({type,text}) => {
    return (
        <div className={`alert alert-${type}`}>
           <h6> {text} </h6>
        </div>
    )
}


export default Alert;