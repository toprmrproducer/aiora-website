import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { ScrollManager, ScrollProgress } from "./ui";

export default function Layout() {
  return (
    <div className="grain min-h-screen">
      <ScrollProgress />
      <ScrollManager />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
