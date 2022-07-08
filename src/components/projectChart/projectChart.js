import React, { useState } from "react";
import styles from "./projectChart.module.css";
import { ResponsiveLine } from "@nivo/line";

export default function ProjectChart(props) {
  const [data, setData] = useState([
    {
      id: "errors",
      color: "hsl(176, 70%, 50%)",
      data: [
        {
          x: "3h",
          y: 245,
        },
        {
          x: "2h30m",
          y: 173,
        },
        {
          x: "2h",
          y: 183,
        },
        {
          x: "1h30m",
          y: 164,
        },
        {
          x: "1h",
          y: 24,
        },
        {
          x: "30m",
          y: 214,
        },
      ],
    },
  ]);
  console.log("호출이되긴하냐?");
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <h6>{props.name}</h6>
        <img src={process.env.PUBLIC_URL + "Vectorgear.png"}></img>
      </div>
      <div className={styles.chart}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Occured time ago",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
