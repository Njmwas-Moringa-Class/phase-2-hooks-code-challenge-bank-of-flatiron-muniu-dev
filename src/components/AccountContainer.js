import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsData, setTransactionsData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:8001/transactions?q=" + searchQuery)
      .then((response) => response.json())
      .then(transactions => setTransactionsData(transactions))
  }, [searchQuery])
  function handleSearch(event) {
    setSearchQuery(event.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transactionsData} />
    </div>
  );
}

export default AccountContainer;