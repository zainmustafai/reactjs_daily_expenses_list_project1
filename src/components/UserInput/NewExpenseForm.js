import React,{useState} from "react";
function NewExpenseForm(props)

{
    
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice]= useState('');
    const [enteredDescription, setEnteredDescription]= useState('');


    const titleChangeHandler = (event) => 
    {
        setEnteredTitle(
        event.target.value
        )

        console.log(enteredTitle);
    } 
     // not recommended!
    const priceChangeHandler = (event) => {
        setEnteredPrice(
             event.target.value
        )
        console.log(enteredPrice);

       
    }

    const descriptionChangeHandler = (event) => 
    {
            setEnteredDescription(
                 event.target.value 
            )
            console.log(enteredDescription);

    }

    const  formSubmissionHandler=(event)=>{
        
        event.preventDefault();

        const inputData={
            title: enteredTitle,
            price : enteredPrice,
            description: enteredDescription  
        };
        

        props.onSubmitListener(inputData);
        setEnteredPrice('');
        setEnteredTitle('');
        setEnteredDescription('');

    };
    


 return(
    <form action="" onSubmit={formSubmissionHandler}>
      <div>
        <label htmlFor="title">Title</label> <br/>
        <input type="text" id="title" onChange={titleChangeHandler} value={enteredTitle} /> <br/>
      </div>
      <div>
        <label htmlFor="price">Price</label><br/>
        <input type="number" id="price" onChange={priceChangeHandler} value={enteredPrice} /><br/>
      </div>
      <div>
        <label htmlFor="description">Description</label><br/>
        <textarea type="text" id="description" onChange={descriptionChangeHandler} value={enteredDescription} /><br/>
      </div>
      <div>
        <button type="submit" className="btn-primary"  >Add New Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
