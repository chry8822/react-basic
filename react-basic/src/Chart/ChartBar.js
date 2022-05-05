import React from "react";

import './ChartBar.css'

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  // 동적인 css 를 위해서 프롭스로 전달받은 숫자를 반올림하고 퍼센트를 주어서 css에서 인식하게 만든다.


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
        {/* html 기본 속성인 style을 인라인으로 작성하고 위에서 선언한 변수를 값으로 지정한다. */}
      </div>
      <div className="chart-bar__label">{props.label}</div>
      <div>{props.totalAmount}</div>
    </div>
  )
}

export default ChartBar;