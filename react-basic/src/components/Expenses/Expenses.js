import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState('2021');

  const filterHandler = (selectYear) => {
    setYearFilter(selectYear);
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === yearFilter;
  });
  // 각각의 데이터에서 사용자가 선택한 년도와 데이터의 년도가 같은것들을 새로운 배열로 반환한다.
  // getFullYear 은 년도를 number로 반환하기 때문에 toString으로 문자로 변환후 비교한다.(yearFilter 는 문자열이기 때문에)

  //-------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={yearFilter} onSaveFilterChange={filterHandler} />
        <ExpenseChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />

        {/* ------------------------------------------------------------------------------------------------------------------- */}


        {/* 방법2 */}
        {/* 삼항 연산자를 사용해서 내용이 없으면 true에 내용을 필터에 내용이 있으면 필터링된 요소를 보여준다 
        {
          filterExpenses.length === 0 ?
            expenseContent :
            filterExpenses.map(expense => {
              // 필터링된 아이템을 맵으로 돌면서 해당하는 요소를 반환하는데 필터링 당시에 이미 프롭스로 전달받은 요소를 반환 했기 때문에 여기서는 따로 프롭스로 받아서 반복문을 돌릴 필요가 없다.
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              )
            })
        }
        배열을 사용해서 컴포넌트가 데이터에 의해 동적으로 그려질수 있다. map은 매개변수로 함수를 자동으로 넘긴다. */}
        {/* 해당 코드를 방법1로 변수에 담는 방법으로 리턴문 안에 코드를 깔끔하게 정리 할수 있다. */}
      </Card>
    </div>
  )
}

export default Expenses;