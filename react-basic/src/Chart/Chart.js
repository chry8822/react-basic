import React from "react";
import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totlaMaximum = Math.max(...dataPointValues)


  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint =>
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totlaMaximum}
          label={dataPoint.label}
          totalAmount={props.totalAmount}
        />)}
      {/* 현재 프롭스로 받안온 dataPoints 만큼 ChartBar컴포넌트를 생서 */}
    </div>
  )
}

export default Chart;


