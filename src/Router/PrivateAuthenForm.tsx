import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ContextMain } from "../context/ContextAuth";

function PrivateAuthenForm({ children }: { children: React.ReactNode }) {
  const { detailUser } = useContext(ContextMain);
  if (detailUser && Object.keys(detailUser).length > 0) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}

export default PrivateAuthenForm;
