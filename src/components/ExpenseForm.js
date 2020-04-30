import React from 'react';

import {MdSend} from "react-icons/md"

const ExpenseForm = ({charge,
    amount,
    handleCharge,
    handleAmount, 
    handleSubmit,
    edit}) => {
    return (
       <form onSubmit={handleSubmit}>
           <div className="form-center">
               <div className="form-group ">
                   <label htmlFor="charge"><h6> Charge </h6></label>
                   <input tye="text" className="form-control" id="charge" name="charge" placeholder="e.g Rent"
                   value={charge}
                   onChange={handleCharge}/>
               </div>
               <div className="form-group">
                   <label htmlFor="amount"><h6> Amount</h6></label>
                   <input tye="number" className="form-control" id="amount" name="amount" placeholder="e.g 1000"
                   value={amount}
                   onChange={handleAmount}/>
               </div>
           </div><br></br>
           <button type="submit" className="btn btn-success">
               {edit? "edit" : "submit"}
               <MdSend className="btn-icon"/>
               </button>
       </form>
    )
}


export default ExpenseForm;