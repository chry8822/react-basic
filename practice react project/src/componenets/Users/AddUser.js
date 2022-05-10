import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const [enterUserName, setEnterUserName] = useState('');
  const [enterAge, setEnterAge] = useState('');
  // useState는 항상 두개의 요소가 있는 배열을 반환

  const addUserHandler = (event) => {
    event.preventDefault();
    // trim.()은 문자열 앞뒤의 공백을 제거한다.
    if (enterUserName.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    if (+enterAge < 1) {
      return;
    }
    props.onAddUser(enterUserName, enterAge)
    setEnterUserName('')
    setEnterAge('')
  }

  const usernameChangeHandler = event => {
    setEnterUserName(event.target.value)
  }

  const ageChangeHandler = event => {
    setEnterAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* 버튼(submit)으로 전송하게 되면 폼이 제출되었을 때 onSubmit 속성에 지정한 함수를 실행한다 */}
        <label htmlFor='username'>Username</label>
        <input id='username' type="text" value={enterUserName} onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" value={enterAge} onChange={ageChangeHandler} />
        {/* input 태그의 value 속성은 키입력으로 변경되는게 아니라 폼을 제출하는 경우에도 현재 상태의 스냅샷을 반영하는 입력값을 가질수 있다.*/}
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;