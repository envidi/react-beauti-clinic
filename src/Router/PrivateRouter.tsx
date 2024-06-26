import { useContext } from "react";
import { ContextMain } from "../context/ContextAuth";
import { Navigate } from "react-router-dom";
function PrivateRouter({ children }: { children: React.ReactNode }) {
  const { detailUser, isLoading } = useContext(ContextMain);
  if (isLoading) return;
  if (detailUser && Object.keys(detailUser).length > 0) {
    return children;
  }
  return <Navigate to='/signin' replace={true} />;
}

export default PrivateRouter;
