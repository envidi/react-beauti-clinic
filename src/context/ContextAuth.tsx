import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getDetailUser } from "../api/user";
import { useNavigate } from "react-router-dom";
interface ContextAuth {
  detailUser: { detailUser: { username: string; email: string } };
  logout: () => void;
  isLoading : boolean
}

export const ContextMain = createContext<ContextAuth>({
  detailUser: {
    detailUser: {
      username: "",
      email: "",
    },
  },
  logout: (): void => {},
  isLoading: false
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isLogined, setIsLogined] = useState(
    !!localStorage.getItem("accessToken"),
  );
  const { data: detailUser, isLoading } = useQuery({
    queryKey: ["USERDETAIL"],
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        const { data } = await getDetailUser();
        return data;
      }
      return {};
    },
  });

  // // eslint-disable-next-line no-unused-vars
  const logout = () => {
    localStorage.removeItem("accessToken");
    queryClient.invalidateQueries({
      queryKey: ["USERDETAIL"],
    });
    // setTimeout(() => {
    //   localStorage.removeItem("ticket");
    //   localStorage.removeItem("countdown");
    // }, 1000);
    navigate("/");
    //   toast.success('Đăng xuất thành công')
  };

  const values = {
    isLogined,
    setIsLogined,
    detailUser: isLoading ? {} : detailUser,
    logout,
    isLoading
  };
  return <ContextMain.Provider value={values}>{children}</ContextMain.Provider>;
};
export default ContextProvider;
