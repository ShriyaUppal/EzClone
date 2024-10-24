import logo from "../assets/New.png";
import styles from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { TbFileReport } from "react-icons/tb";
import { useAppContext } from "../store/AppContext.jsx"; // Correct import

const Sidebar = () => {
  const { setCurrentPage, currentPage } = useAppContext();

  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 ${styles.scontainer}`}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className={`nav-item ${styles.navItem}}`}>
          <a href="#" className="nav-link link-body-emphasis w-100">
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
              style={{
                height: "auto",
                marginBottom: "20px",
                width: "200px",
              }}
            />
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className={`nav-link ${
              currentPage === "dashboard" ? "active" : ""
            }`}
            style={
              currentPage === "dashboard"
                ? { backgroundColor: "#188A97", color: "white" }
                : { color: "black" }
            }
            onClick={() => setCurrentPage("dashboard")}
            aria-current="page"
          >
            <div className={styles.navLink}>
              <MdDashboard size={20} className={styles.icon} />
              <span>Dashboard</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${currentPage === "leads" ? "active" : ""}`}
            style={
              currentPage === "leads"
                ? { backgroundColor: "#188A97", color: "white" }
                : { color: "black" }
            }
            onClick={() => setCurrentPage("leads")}
          >
            <div className={styles.navLink}>
              <MdLeaderboard size={20} className={styles.icon} />
              <span>Leads</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${
              currentPage === "analytics" ? "active" : ""
            }`}
            style={
              currentPage === "analytics"
                ? { backgroundColor: "#188A97", color: "white" }
                : { color: "black" }
            }
            onClick={() => setCurrentPage("analytics")}
          >
            <div className={styles.navLink}>
              <MdAnalytics size={20} className={styles.icon} />
              <span>Analytics</span>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link ${currentPage === "reports" ? "active" : ""}`}
            style={
              currentPage === "reports"
                ? { backgroundColor: "#188A97", color: "white" }
                : { color: "black" }
            }
            onClick={() => setCurrentPage("reports")}
          >
            <div className={styles.navLink}>
              <TbFileReport className={styles.icon} size={20} />
              <span>Reports</span>
            </div>
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
