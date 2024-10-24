// src/Components/SalesChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const data = {
    labels: ["1-15", "16-25", "31-40", "41-60"],
    datasets: [
      {
        label: "Performance Task",
        data: [59, 65, 80, 81],
        backgroundColor: "#188A97",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "300px" }}>
      <h2></h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
