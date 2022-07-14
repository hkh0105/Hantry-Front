import React, { useState } from "react";
import styles from "./ProjectChart.module.css";
import { ResponsiveLine } from "@nivo/line";
import DeleteButton from "../DeleteButton/DeleteButton";
import { useNavigate } from "react-router-dom";

export default function ProjectChart({ project }) {
  const navigate = useNavigate();

  const projectCardButtonHandler = event => {
    event.preventDefault();
    navigate(`/project_detail/${project.dsn}`);
  };

  return (
    <>
      <DeleteButton dsn={project.dsn} />
      <div className={styles.box} onClick={projectCardButtonHandler}>
        <div className={styles.header}>
          <h6>{project.name}</h6>
          <img src={process.env.PUBLIC_URL + "Vectorgear.png"}></img>
        </div>
        <div className={styles.chart}>
          <ResponsiveLine
            data={project.error}
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
              legendPosition: "m iddle",
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
    </>
  );
}
