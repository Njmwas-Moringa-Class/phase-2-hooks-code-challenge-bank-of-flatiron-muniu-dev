import React, { useState } from "react";

function AddTransactionForm() {
  const [transactionDate, setTransactionDate] = useState("")
  const [transactionDescription, setTransactionDescription] = useState("")
  const [transactionCategory, setTransactionCategory] = useState("")
  const [transactionAmount, setTransactionAmount] = useState("")
  function handleFormSubmit(event) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: transactionDate,
        description: transactionDescription,
        category: transactionCategory,
        amount: transactionAmount,
      }),
    });
     alert("Transaction added successfully")
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="inline fields">
          <input value={transactionDate} onChange={(event) => setTransactionDate(event.target.value)} type="date" name="date" />
          <input value={transactionDescription} onChange={(event) => setTransactionDescription(event.target.value)} type="text" name="description" placeholder="Description" />
          <input value={transactionCategory} onChange={(event) => setTransactionCategory(event.target.value)} type="text" name="category" placeholder="Category" />
          <input value={transactionAmount} onChange={(event) => setTransactionAmount(event.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
