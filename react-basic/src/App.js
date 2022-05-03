import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenseData(prevExpense => {
      return ([expense, ...prevExpense])
    })
    // 더미 데이터는 배열이고 새로 생성된 데이터를 배열의 첫번째요소로 넣어주고 뒤에는 기존에 데이터를 전개연산자로 넣어준다.
  }
  // 해당 함수는 아래 컴포넌튼에서 생성된 데이터를 받아온다 (아래 컴포넌트에서 생성된 데이터를 프롭스로 전달한 해당함수의 매개변수로 넣어준다. 그럼 아래에서 매개변수로 넣어준 데이터를 상위컴포넌트인 현재 컴포넌트에서 사용할수 있다.)

  //set 함수에는 기존에 더미 데이터가 있고 해당 더미데이터를 전개연산자로 새로 생성된 데이터 뒤로 배열로 반환한다.
  // 기존의 데이터를 돌면서 한번더 기존 데이터에 대한 상태체크를 하게 되므로 좀더 안전하게 기존 데이터를 가져온다.

  // 방법1
  // const addExpenseHandler = expense => {
  //   setExpenseData([expense, ...expenseData])
  // }
  // useState에서 반환된 값으로 데이터를 가져온다 하지만 상태를 일정주기를 가지고 업데이트하고 리렌더링 되기때문에
  // 특정한 상황이나 예상치 못한 상황으로 인해 데이터의 손실이 발상할수 있다.


  // 방법2
  // const addExpenseHandler = expense => {
  //   setExpenseData(prevExpense => {
  //     return ([expense, ...prevExpense])
  //   })
  // }

  // 세터 함수에 매겨변수로는 항상 최신의 상태가 넘어온다 렌더링과 별게로 내부적으로 저장된 최신의 값이 들어오기때문에
  // 방법1 과 같이 예상치 못한 데이터 손실을 방지할수 있다.

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
