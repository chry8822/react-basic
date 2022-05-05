import React, { useEffect, useState } from "react";
import Chart from "../../Chart/Chart";

import './ExpenseChart.css'

const ExpenseChart = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // const copied = props.expenses.map((expense) => {
  //   return expense.amount += totalAmount;
  // })

  // useEffect(() => {
  //   setTotalAmount(() => {
  //     props.expenses.map(expense => {
  //       const copied = JSON.parse(JSON.stringify(expense));
  //       copied.amount = copied.amount + totalAmount;
  //       return copied
  //     })
  //   })
  // }, [])



  return (
    <div>
      <Chart dataPoints={chartDataPoints} totalAmount={totalAmount} />
    </div>
  )
}

export default ExpenseChart;