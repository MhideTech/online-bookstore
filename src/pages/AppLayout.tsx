import { Outlet } from "react-router-dom";
import DashboardNavbar from "../ui/DashboardNavbar";
import DashboardSidebar from "../ui/DashboardSidebar";

export default function AppLayout() {
  return (
    <main className="flex h-screen">
      <DashboardSidebar />
      <section className="flex-1 flex flex-col">
        <DashboardNavbar />
        <div className="h-[90vh] overflow-y-scroll">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
