import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Leads from "./Components/Leads"; // Assuming you have a Leads component
import Analytics from "./Components/Analytics"; // Assuming you have an Analytics component
import Reports from "./Components/Reports"; // Assuming you have a Reports component
import { useAppContext } from "./store/AppContext";

function App() {
  const { currentPage } = useAppContext(); // Get current page from context
  // Function to render the main content dynamically
  const renderContent = () => {
    if (currentPage === "dashboard") return <Dashboard />;
    if (currentPage === "leads") return <Leads />;
    if (currentPage === "analytics") return <Analytics />;
    if (currentPage === "reports") return <Reports />;
  };
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8f9fa",
          overflowY: "auto",
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
