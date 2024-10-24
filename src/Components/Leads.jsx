import React from "react";
import { FaTrash } from "react-icons/fa"; // Import delete icon from react-icons
import styles from "./Leads.module.css";
import { Popover } from "bootstrap";

const LeadsPage = () => {
  const [leads, setLeads] = React.useState([
    { id: 1, name: "Rohan", contact: "rohan6@gmail.com", status: "Active" },
    { id: 2, name: "Sita", contact: "sita1615@gmail.com", status: "Active" },
    { id: 3, name: "Nisha", contact: "nisha24@gmail.com", status: "Active" },
    {
      id: 4,
      name: "John Doe",
      contact: "johndoe@gmail.com ",
      status: "UnActive",
    },
    { id: 5, name: "Rohan S.", contact: "Roahns@gmail.com ", status: "Active" },
    { id: 6, name: "Sam Dew", contact: "SamDew@gmail.com", status: "UnActive" },
    { id: 7, name: "Sammy", contact: "Sammy123@gmail.com", status: "UnActive" },
  ]);
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (confirmed) {
      setLeads(leads.filter((lead) => lead.id !== id));
    }
  };

  return (
    <>
      <center>
        <h1 className={`${styles.leadsHeading}`}>Leads Overview</h1>
      </center>
      <div className={`${styles.leadsContent}`}>
        <center>
          <table className={`${styles.table}`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Actions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <>
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.id}</td>
                    <td>{lead.name}</td>
                    <td>{lead.contact}</td>
                    <td>{lead.status}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(lead.id)}
                        aria-label={`Delete lead with ID ${lead.id}`}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <FaTrash style={{ color: "#188A97" }} />{" "}
                        {/* Delete icon */}
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
};

export default LeadsPage;
