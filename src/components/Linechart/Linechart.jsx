import { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export default function Linechart({ data }) {
  const [chartData, setChartData] = useState({
    labels: data.data.map((item) => item.Year),
    datasets: [
      {
        label: "Population",
        data: data.data.map((item) => item.Population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Population Data",
          },
          legend: {
            display: true,
          },
        },
        scales: {
          y: {
            title: {
              display: true,
              text: "Number of People",
            },
          },
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
        }
      }}
    />
  );
}
