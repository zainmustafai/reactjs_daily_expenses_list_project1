import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/UserInput/NewExpense";
import { useState } from "react";

function App() {
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpenseItems([expenseData, ...expenseItems]);
  };

  const [expenseItems, setExpenseItems] = useState([]);
  const deletedIdHandler = (takenID) => {
      console.log("Delete Button Pressed!");    
  };

  return (
    <div className="App">
      <NewExpense onAddNewExpenseListener={addExpenseHandler} />
      <Expenses listItem={expenseItems} deletedIdListener={deletedIdHandler} />
    </div>
  );
}

export default App;
