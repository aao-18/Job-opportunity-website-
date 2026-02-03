import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Applications from "./pages/Applications.jsx";
import RecruterLogin from "./components/RecruterLogin.jsx";
import Applyjobs from "./pages/Applyjobs.jsx";
import { AppContext } from "./context/AppContext.jsx";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import AddJob from "./pages/AddJob.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import "quill/dist/quill.snow.css";

const App = () => {
  const { showRecruterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruterLogin && <RecruterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/apply-jobs/:id" element={<Applyjobs />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-jobs" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-job-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
