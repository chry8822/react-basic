import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className;
  // 기본적으로 가질 클래스와 (공백을주고 공백이 없으면 클래스 명이 붙어서 적용이 안됨) + 동적으로 붙는 클래스로 두가지 스타일을 가질수 있게 변수에 담는다.

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Card;
// 재사용 가능한 래퍼 컴포넌트