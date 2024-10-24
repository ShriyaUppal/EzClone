import React from "react";
import styles from "./Dashboard.module.css";
import SalesChart from "./SalesChart";
import { MdOutlineUpdate } from "react-icons/md";
import { MdInsertComment } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";
import SalesReviewChart from "./SalesReviewChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <center>
        <h1 className={`${styles.mainHeading}`}>Dashboard</h1>
      </center>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Performance
                  </h5>
                </center>
                <div className={styles.salesChart}>
                  <SalesChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>Task List</h5>
                </center>
                <ul className={`square-list`}>
                  <li className={`list-group-item`}>
                    <FaSquareFull className={`${styles.icons}`} />
                    Complete Project documentation
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} />
                    Review Code for Module A
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} />
                    Prepare Presentation for Team Meetings
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Test New
                    Feature
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Update
                    Documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Quick Stats
                  </h5>
                </center>
                <ul className={`square-list`}>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Total Users:
                    1500
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Active Users
                    Today: 300
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} />
                    New Leads: 45
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Activity Log
                  </h5>
                </center>
                <ul className="square-list">
                  <li className="list-group-item">
                    <MdOutlineUpdate className={`${styles.icons}`} />
                    <span>You updated lead details of Zaid.</span>
                  </li>
                  <li className="list-group-item">
                    <MdInsertComment className={`${styles.icons}`} />
                    <span>Team Member Mike commented on the project.</span>
                  </li>
                  <li className="list-group-item">
                    <FaFileExport className={`${styles.icons}`} />
                    <span>You exported the sales report.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Notifications
                  </h5>
                </center>
                <ul className={`square-list`}>
                  <li className="list-group-item">
                    <MdOutlineMessage className={`${styles.icons}`} /> New
                    Message from team
                  </li>
                  <li className="list-group-item">
                    <IoMdNotifications className={`${styles.icons}`} />{" "}
                    Reminder: Project deadline is tomorrow.
                  </li>
                  <li className="list-group-item">
                    <MdOutlineUpdate className={`${styles.icons}`} />
                    System Update Schedule at 8:00 PM.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Recent Leads
                  </h5>
                </center>
                <ul className={`square-list`}>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} /> Rohan:
                    rohan6@gmail.com.
                  </li>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} /> Sita:
                    sita1615@gmail.com.
                  </li>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} />
                    Nisha: Nisha24@gmail.com.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row with Sales Review, User Engagement, and Recent Engagement */}
        <div className="row">
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Sales Review
                  </h5>
                </center>
                <div className={styles.salesChart}>
                  <SalesReviewChart />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    User Engagement
                  </h5>
                </center>
                <ul className={`square-list`}>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Daily Active
                    Users: 500
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} /> Monthly
                    Sign-ups: 100
                  </li>
                  <li className="list-group-item">
                    <FaSquareFull className={`${styles.icons}`} />
                    User Sessions: 1200
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <center>
                  <h5 className={`card-title ${styles.heading}`}>
                    Recent Engagement
                  </h5>
                </center>
                <ul className={`square-list`}>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} /> User A logged in
                    at 10:00 AM
                  </li>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} /> User B completed
                    a task at 11:15 AM
                  </li>
                  <li className="list-group-item">
                    <FaCircle className={`${styles.icons}`} />
                    User C added a new lead at 2:30 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
