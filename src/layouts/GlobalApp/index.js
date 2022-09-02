import { Outlet } from "react-router-dom";
import GlobalBottombar from "../../components/molecules/GlobalBottombar";
import GlobalFooter from "../../components/molecules/GlobalFooter";
import GlobalNavbar from "../../components/molecules/GlobalNavbar";
import GlobalTopbar from "../../components/molecules/GlobalTopbar";

const GlobalApp = () => {
  return (
    <>
      <GlobalTopbar />
      <GlobalNavbar />
      <Outlet />
      <GlobalFooter />
      <GlobalBottombar />
    </>
  );
};

export default GlobalApp;
