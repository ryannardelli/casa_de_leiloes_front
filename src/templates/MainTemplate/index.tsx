import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/layout/Sidebar";

export default function MainTemplate() {
  return (
    <>
      <Sidebar role="BIDDER" />

      <div className="ml-0 md:ml-64 min-h-screen bg-gray-50 transition-all">
        <Outlet />
      </div>
    </>
  );
}