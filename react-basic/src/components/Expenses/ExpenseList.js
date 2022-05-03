import React from "react";
import ExpenseItem from "./ExpenseItme";

import './ExpenseList.css'

const ExpenseList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">지출 내용이 없습니다.</h2>
  }

  // 하나의 컴포넌트에서 if문 조건이 충족하면 if 문을 리턴하고 아니면 아래 jsx ExpenseItem 컴포넌트를 리턴한다.

  return (
    <ul className="expenses-list">
      {
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  )
}

// Expense 컴포넌트에서 ExpenseItem 컴포넌트로 props item을 내려주고(필터링된 데이터) 현재 컴포넌트에서는 props.item 으로 받아서 사용

export default ExpenseList;
