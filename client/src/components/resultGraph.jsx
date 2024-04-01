import * as React from "react";
import { Label, XAxis, YAxis, Legend, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

export default function ResultGraph({careers}) {
  return(
  <>
    <div className="con">
      <div className="chart-con">
        <BarChart width={500} height={400} data={careers}>
          <CartesianGrid storke="#ccc" />
          <XAxis height={120} angle={40} textAnchor="start" dataKey="name" />
          <YAxis width={80}>
            <Label angle={-90} fill="black" textAnchor="middle">Recommendation %</Label>
          </YAxis>
          <Legend />
          <Tooltip />
          <Bar dataKey="rate" fill="#2e408f" />
        </BarChart>
        <div className="left-extend">&gt;</div>
      </div>
    </div>

    <style jsx>{`
      .con {
        position: absolute;
        left: 0;
        height: 95vh;
        display: flex;
        align-items: center;
        z-index: 10;
      }
      .chart-con {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0;
        display: flex;
        transform: translateX(-500px);
        transition: transform 1s;
        padding; 30px 10px;
        background-color: #eeeeee;
        border-radius: 10px 0 0 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
      }
      .chart-con:hover {
        transform: translateX(0%);
      }
      .left-extend {
        padding: 40px 10px;
        font-size: 32px;
        color: #696969;
      }
    `}</style>  
  </>);
}