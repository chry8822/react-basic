import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: (Math.random() * 10).toString()
    };
    props.onAddExpense(expenseData);
  };

  // 아래 컴포넌트에서 데이터를 받아서 상위 컴포넌트로 전달 한다.


  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense