import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import StudentDashboardSidebar from "../../components/studentDashboardSidebar";
import EnrolledCourses from "./enrolledCourses";
import AccountDetails from "./accountDetails";
const StudentDashboard = () => {
  return (
    <div className=" d-flex m-0 p-0 mt-5 pt-5 justify-content-center ">
      <div className="container">
        <div className="row m-0 p-0">
          <StudentDashboardSidebar />
          <div className="col-lg-9">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/enrolled-courses" element={<EnrolledCourses />} />
              <Route path="/accountDetails" element={<AccountDetails/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
