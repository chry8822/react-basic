import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: (Math.random() * 10).toString()
    };
    props.onAddExpense(expenseData);
    setToggleBtn(false)
  };

  // 아래 컴포넌트에서 데이터를 받아서 상위 컴포넌트로 전달 한다.

  const [toggleBtn, setToggleBtn] = useState(false);
  const openFormHandler = () => {
    setToggleBtn(true);
  }

  const closeFormHandler = () => {
    setToggleBtn(false)
  }


  return (
    <div className='new-expense'>
      {!toggleBtn && <button onClick={openFormHandler}>Add New Expense</button>}
      {toggleBtn && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeFormHandler={closeFormHandler} />}
    </div>
  )
}

export default NewExpense;