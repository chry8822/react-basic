import React, { useState } from 'react';
// import styled from 'styled-components';
import styles from './CourseInput.module.css'

import Button from '../../UI/Button/Button';

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;  
//       color: ${props => props.invalid ? 'red' : 'black'};
//     }

//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//       background-color: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//     }

//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // 문자열 좌우에 불필요한 공백을 제거해주는 메소드 trim()

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl invalid={!isValid}> */}

      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        {/* 유효하지 않은 객체명에 접근 할때는 대괄호안에 따움표로 감싸서 해결한다. 
            [문자열은 자바스크립트 객체에서 유효한 키]
        */}

        {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> */}
        {/* 템플릿 리터럴을 사용하여 클래스를 조건에 따라 동적으로 추가 할수 있다. */}
        <label >Course Goal</label>
        {/* 인라인 스타일은 값으로 객체를 가진다. */}
        <input
          placeholder={!isValid ? "빈값은 입력할수 없습니다." : ''}
          type="text" onChange={goalInputChangeHandler} />

      </div>

      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
