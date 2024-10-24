import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  // Sample data for demonstration
  const [dateRange, setDateRange] = useState("lastWeek");
  const [chartData, setChartData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Users",
        data: [50, 75, 100, 125], // Sample data
        backgroundColor: "#188a97",
      },
    ],
  });

  const handleDateChange = (event) => {
    setDateRange(event.target.value);
    // Update chart data based on selected date range here
    // For demonstration, we'll just reset the data.
    if (event.target.value === "lastWeek") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Users",
            data: [50, 75, 100, 125],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    } else if (event.target.value === "lastMonth") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        datasets: [
          {
            label: "Users",
            data: [60, 80, 90, 100, 110],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    } else if (event.target.value === "lastThreeMonths") {
      setChartData({
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Users",
            data: [70, 95, 120, 150],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    }
  };

  return (
    <div>
      <h1 className={styles.analyticsHeading}>Analytics Overview</h1>
      <center>
        <div className={styles.chartContainer}>
          <Bar data={chartData} />
          <select onChange={handleDateChange} value={dateRange}>
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastThreeMonths">Last 3 Months</option>
          </select>
        </div>
      </center>

      <div className={styles.widgets}>
        <div className={styles.widget}>Total Leads: 150</div>
        <div className={styles.widget}>Total Sales: 120</div>
        <div className={styles.widget}>Conversion Rate: 80%</div>
      </div>
    </div>
  );
};
