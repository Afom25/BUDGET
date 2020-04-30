import React from 'react';

import {MdEdit,MdDelete} from 'react-icons/md'
const ExpenseItem = ({expense,handleEdit,handleDelete}) => {

    const { id,charge,amount} = expense;
    return (
       <div className="item">
           <div className="container">
          
           <div class="card">
               <span className="expense">
                   <h4>{charge}</h4>
                </span>
               </div>
               <div className="col-md-4">
               <span className="amount">
                   <h5>{amount}</h5>
                </span>

                <button className="edit-btn" arial-label="edit button" onClick={() =>handleEdit(id)}>
                     <a href="#" class="alert-link"> <MdEdit/>Edit</a> 
                     
               </button>
               <button className="clear-btn" arial-label="delete button" onClick={() => handleDelete(id)}>
                <a href="#" class="alert-link "><MdDelete/>Delete</a>  
               </button>

               </div>
            
           
        </div>

           </div>
          
        
    
    )
}


export default ExpenseItem;