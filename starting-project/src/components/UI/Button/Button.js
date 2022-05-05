import React from 'react';
// import styled from 'styled-components';

import styles from './Button.module.css';
// css 모듈로 임포트 할때는 css 파일명에 module로 해당 파일은 모튤 css로 컴파일 된다는걸 리액트에 알려준다.
// 그리고 해당 css 파일은 객체로 가져오기 때문에 import 할때 객체의 이름을 지정해준다.
// css 모듈로 불러온 클래스는  '컴포넌트이름_클래스이름__고유한 해시값' 을 가지는 클래스명으로 컴파일해서 모듈을 임포트한 컴포넌트에서만 사용되며 클래스명의 중복에 의한 예상치 못한 상황을 방지할수 있다.

//css 모듈의 개념은 css 파일에서 설정한 css 스타일의 범위가 해당 파일에 임포트하는 컴포넌트에 한정된다.

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width : 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }

// `;
// 위에 코드는 styled component로 만든 컴포넌트

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {/* css 모듈로 가져온 객체에 값을 클래스로 지정해준다. */}
      {props.children}
    </button>
  );
};

export default Button;
