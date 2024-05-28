import { User } from "../pages/Authentication/Signup";
import { InsanceTokenFn, baseAuth } from "./instance";

export const signup = (user: User) => {
  return baseAuth.post("/user/register", user);
};
export const signin = (user: { email: string; password: string }) => {
  return baseAuth.post("/user/login", user);
};
export const getDetailUser = () => {
  const instanceToken = InsanceTokenFn('accessToken', 'user')
  return instanceToken.get('/detail')
  };
