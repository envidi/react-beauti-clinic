import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getDetailUser } from "../api/user";

export const ContextMain = createContext<any>({
  detailUser: {
    username: "",
    email: "",
  },
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
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
  // const logout = () => {
  //   if (ticket && ticket.ticket_id) {
  //     mutate({
  //       ticket_id: ticket.ticket_id
  //     })
  //   }
  //   localStorage.removeItem('Accesstoken')
  // //   queryClient.invalidateQueries({
  // //     queryKey: [USERDETAIL]
  // //   })
  //   setTimeout(() => {
  //     localStorage.removeItem('ticket')
  //     localStorage.removeItem('countdown')
  //   }, 1000)
  //   navigate('/')
  //   setIsLogined(false)
  // //   toast.success('Đăng xuất thành công')
  // }

  const values = {
    isLogined,
    setIsLogined,
    detailUser: isLoading ? {} : detailUser,
  };
  return <ContextMain.Provider value={values}>{children}</ContextMain.Provider>;
};
export default ContextProvider;
