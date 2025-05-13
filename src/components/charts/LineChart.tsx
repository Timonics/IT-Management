"use client";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Revenue",
    color: "hsl(252, 70%, 50%)",
    data: [
      { x: "Jan", y: 120 },
      { x: "Feb", y: 150 },
      { x: "Mar", y: 80 },
      { x: "Apr", y: 200 },
      { x: "May", y: 170 },
    ],
  },
  {
    id: "Expenses",
    color: "hsl(10, 70%, 50%)",
    data: [
      { x: "Jan", y: 100 },
      { x: "Feb", y: 90 },
      { x: "Mar", y: 120 },
      { x: "Apr", y: 130 },
      { x: "May", y: 110 },
    ],
  },
];

export default function NivoLineChart() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          legend: "Month",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          legend: "Amount",
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
  );
}
