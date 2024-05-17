import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default ClientLayout;
