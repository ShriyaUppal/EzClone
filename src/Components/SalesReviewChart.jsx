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

const SalesReviewChart = () => {
  const data = {
    labels: ["q1", "q2", "q3", "q4"],
    datasets: [
      {
        label: "Sales",
        data: [5000, 8000, 13000, 15000],
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

export default SalesReviewChart;
