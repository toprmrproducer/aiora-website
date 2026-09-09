import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { ScrollManager, ScrollProgress } from "./ui";
import Preloader from "./Preloader";
import Cursor from "./Cursor";

export default function Layout() {
  return (
    <div className="grain min-h-screen">
      <Preloader />
      <Cursor />
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
