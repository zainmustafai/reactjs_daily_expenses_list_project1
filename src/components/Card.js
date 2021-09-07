import React from 'react';
import './Card.css';



function Card(props) {

    
    
    function clickHandler(){

        
        props.onDeleteListener(props.ID)
       
        return;
    }
    return (
        <div className = "expense-item container " >
            <div className="child-div">
                 <h3>{props.title}</h3> 
            </div>
            <div className="expense-item__price child-div" >
                <h3>{props.price}  Rs</h3>
            </div>

            <div className="expense-item__description child-div">
                <h3>{props.description}</h3>
            </div>
            
            <button className=" btn-primary " onClick={clickHandler}  > Delete </button>


        </div>
    )
}

export default Card
