import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { parseErrorsPerTime } from "../../utils/parseErrors";

export default function LineGraph({ errors }) {
  const [parsedErrors, setParsedErrors] = useState([]);

  useEffect(() => {
    setParsedErrors(parseErrorsPerTime(errors));
  }, [errors]);

  return (
    <>
      {!parsedErrors && (
        <>
          <img
            className="unselect-items"
            src={process.env.PUBLIC_URL + "/NoError.png"}
            style={{
              marginLeft: 50,
              marginTop: 50,
              marginBottom: 50,
              width: "80%",
              height: "30vh",
            }}
          />
        </>
      )}
      {parsedErrors && (
        <ResponsiveLine
          data={parsedErrors}
          margin={{ top: 50, right: 10, bottom: 50, left: 50 }}
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
            legend: "Day before",
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
      )}
    </>
  );
}
