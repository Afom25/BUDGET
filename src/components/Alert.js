import React from 'react';


const Alert = ({type,text}) => {
    return (
        <div className={`alert alert-${type}`}>
           <h5> {text} </h5>
        </div>
    )
}


export default Alert;