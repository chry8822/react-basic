import React from "react";

import classes from './Button.module.css'

const Button = props => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}>
      {props.children}
    </button>
    // 버튼의 타입과 클릭이벤트를 동적으로 지정하고 타입의 기본값으로는 버튼 타입을 가지게 지정한다.
  )
}

export default Button;