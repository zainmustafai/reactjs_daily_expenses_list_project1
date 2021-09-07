import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';


function NewExpense(props) {

    const submitHandler=(inputData)=>{
        const expenseData = {
            ...inputData,
            id: Math.random().toString(),
        }
        
        props.onAddNewExpenseListener(expenseData);
    };

  return (
    <div className="container" >
      <NewExpenseForm onSubmitListener ={submitHandler} />
    </div>
  );
}

export default NewExpense;
