import React from 'react';
import Card from './Card';
import './Expenses.css';



const Expenses = (props) => {

    const onDeleteHandler=(takednID)=>{
        
        props.deletedIdListener(takednID);
        

    };
   
    return (
        <div className =" container " >
            <h1  >
                Daily Expenses List
            </h1>
            
            {
                
                props.listItem.map((expense)=> <Card 
                title ={expense.title} 
                price={expense.price}
                description={expense.description}
                ID = {expense.id}

                onDeleteListener={onDeleteHandler}
                /> )
            }
           

            
            

        </div>
        );
}

export default Expenses;