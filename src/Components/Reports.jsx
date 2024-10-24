import React, { useState } from "react";
import styles from "./Reports.module.css";

const Reports = () => {
  const [reportType, setReportType] = useState("csv"); // State to store selected report type

  // Function to handle change in dropdown selection
  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  // Function to handle report generation
  const handleGenerateReport = () => {
    if (reportType === "csv") {
      const data = [
        ["Name", "Age", "City"],
        ["John Doe", 28, "New York"],
        ["Jane Smith", 34, "Los Angeles"],
      ];

      const csvContent =
        "data:text/csv;charset=utf-8," +
        data.map((e) => e.join(",")).join("\n");
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "report.csv");
      document.body.appendChild(link); // Required for FF

      link.click(); // This will download the CSV file
    } else if (reportType === "pdf") {
      // Logic for PDF generation can go here
      console.log("PDF generation logic not implemented yet.");
    }
  };

  return (
    <div>
      <center>
        <h1 className={styles.ReportHeading}>Reporting Tool</h1>
      </center>

      <center>
        <div className={styles.mainContent}>
          <h4>Report Generation</h4>

          {/* Dropdown for selecting report type */}
          <select
            className={styles.reportDropdown}
            value={reportType}
            onChange={handleReportTypeChange}
          >
            <option value="csv">CSV</option>
            <option value="pdf">PDF</option>
          </select>

          {/* Button to generate the report */}
          <button
            className={styles.generateButton}
            onClick={handleGenerateReport}
          >
            Generate Report
          </button>
        </div>
      </center>
    </div>
  );
};

export default Reports;
