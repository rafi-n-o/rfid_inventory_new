import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import Preloader from "../../components/molecules/Preloader";
import Sidebar from "../../components/molecules/Sidebar";
import { getUser } from "../../redux/action/user";

const MainApp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((res) => {})
      .catch((err) => {
        navigate("/login");
        toast.error("silahkan login");
        localStorage.removeItem("token");
      });
  }, []);

  return (
    <div className="wrapper">
      <Preloader />
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
