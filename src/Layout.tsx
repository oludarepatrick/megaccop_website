import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
