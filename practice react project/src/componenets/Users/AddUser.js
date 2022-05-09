import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';

import classes from './AddUser.module.css'

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();


  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* 버튼(submit)으로 전송하게 되면 폼이 제출되었을 때 onSubmit 속성에 지정한 함수를 실행한다 */}
        <label htmlFor='username'>Username</label>
        <input id='username' type="text" />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser;