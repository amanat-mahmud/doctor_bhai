import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Nav from "../Components/Shared/Nav";
import { AuthContext } from "../Contexts/UserContext";
import useAdmin from "../Hooks/useAdmin";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);
  return (
    <div className=" max-w-[1440px] mx-auto">
      <Nav></Nav>
      <div className="drawer drawer-mobile drawer-end">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All users</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">Add Doctor</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashBoardLayout;
