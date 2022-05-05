import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [addDate, setAddDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   inputAmount: '',
  //   addDate: '',
  // });
  //비슷한 상태를 객체로 useState 로 관리(선택사항 독립적으로 관리해도 무방)

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    //사용자가 하나의 변경사항이 있을때 입력이 되지 않은 상태는 날아가기 때문에 전개연산자로 바뀌기 않은 상태값을 넣어줘서 바뀌지 않은것은 이전의 상태값으로 업데이트 (완벽히 올바른 방법은 아님)
    //동시에 수많은 상태 업데이트를 계획한다면 오래되었거나 잘못된 상태 스냅샷에 의존할 수도 있다.

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    //변경 함수안에 콜백함수로 이전함수와 업데이트될 함수를 넣어주면 항상 최신 상태의 함수를 받을수 있다.
    // 만약 상태 업데이트가 이전 상태에 의존하고 있으면 위와같은 로직을 사용해야한다.
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   inputAmount: event.target.value,
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, inputAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setAddDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   addDate: event.target.value,
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, addDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +inputAmount,
      date: new Date(addDate),
    };

    props.onSaveExpenseData(expenseData);
    // 상위 컴포넌트로 해당 컴포넌트의 데이터를 파라미터로 전달한다.
    setEnteredTitle('');
    setInputAmount('');
    setAddDate('');

    // 입력받은 데이터는 expenseData 객체에 저장된다.
    // 입력하고 섭밋으로 데이터를 전송하면 다시 빈칸으로 오버라이딩 해준다.
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min='2019-01-01' step='2022-12-31' value={addDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.closeFormHandler}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;