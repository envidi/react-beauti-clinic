import "twin.macro";
import Wrapper from "../../components/Wrapper";
import TitleHeading from "../../components/TitleHeading";
import SecondHeading from "../../components/SecondHeading";
import { Input } from "../../components/ui/input";
import Button from "../../components/Button";
import Section from "../../components/Section";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { css } from "twin.macro";
import { useState } from "react";
import EyeShow from "./EyeShow";
import { toast } from "react-toastify";
import { signin } from "../../api/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newUser: { email: string; password: string }) => {
      return signin(newUser);
    },
    onSuccess: (data) => {
      toast.success("Login successful", {
        position: "top-right",
      });
      localStorage.setItem("accessToken", data.data.accessToken);
      form.reset();
      queryClient.invalidateQueries({
        queryKey: ["USERDETAIL"],
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
    onError: () => {
      toast.error("Login failed", {
        position: "top-right",
      });
    },
  });
  const [isShow, setIsShow] = useState(false);
  const formSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: ["com", "net"] } }),
    password: Joi.string()
      .pattern(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/,
      )
      .messages({
        "string.pattern.base":
          "Password should be between 8 to 20 characters and contain uppercase, lowercase letters and numbers only and regex characters(@)",
        "string.min": "Password must have at least 8 characters",
      }),
  });
  const form = useForm({
    resolver: joiResolver(formSchema),
    defaultValues: {
      email: state?.email || "",
      password: state?.password || "",
    },
    mode:'onChange'
  });
  function onSubmit(values: { email: string; password: string }) {
    mutation.mutate(values);
  }

  return (
    <Section tw='mt-[9.05rem] relative'>
      <div tw='absolute top-[-12.8rem] left-0 -z-10 w-[81.5%]'>
        <img
          tw='w-full -z-10'
          src={window.location.origin + "/Background-Bubble-3.png"}
          alt=''
        />
      </div>
      <Wrapper tw='flex justify-center flex-row'>
        <div
          tw='md:w-[50%] sm:w-[60%] xs:w-[80%] flex flex-col xs:items-center items-center px-[2rem] py-[1.5rem] rounded-[25px] bg-background-main'
          css={[
            css`
              box-shadow: 0px 25px 50px 25px #f6f7ff;
            `,
          ]}
        >
          <TitleHeading tw='md:text-center'>Login</TitleHeading>
          <SecondHeading tw='md:text-center mt-[0.6rem] tracking-[0.015rem] xs:w-[100%] sm:w-[80%] leading-[2.8rem]'>
            Login with your account
          </SecondHeading>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full z-50 mt-[1rem]'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex flex-col mt-3'>
                    <FormLabel className='text-primary-footerColor font-semibold tracking-[0.03rem]'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-background-main outline-none border  border-[#D9DDFE] pl-[1.58rem] py-[1.45rem] rounded-[15px] placeholder:text-[#c5c5c5] placeholder:tracking-[0.05rem]'
                        type='email'
                        autoComplete=''
                        placeholder='Enter your email'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-[red]' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='flex flex-col mt-5'>
                    <FormLabel className='text-primary-footerColor font-semibold tracking-[0.03rem]'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          className='bg-background-main outline-none border  border-[#D9DDFE] pl-[1.58rem] py-[1.45rem] rounded-[15px] placeholder:text-[#c5c5c5] placeholder:tracking-[0.05rem]'
                          type={isShow ? "text" : "password"}
                          placeholder='Your password'
                          {...field}
                        />
                        <EyeShow isShow={isShow} setIsShow={setIsShow} />
                      </div>
                    </FormControl>

                    <FormMessage className='text-[red]' />
                  </FormItem>
                )}
              />
              <div tw='flex items-center mt-2 tracking-[0.045rem] text-[0.85rem] text-center justify-center gap-1'>
                Don't have account ?
                <Link
                  to={"/signup"}
                  className='text-secondary-mainColor block font-semibold'
                >
                  Register
                </Link>
              </div>
              {mutation.isPending ? (
                <Button type='button' tw='mt-10'>
                  <Loader className="animate-spin" />
                </Button>
              ) : (
                <Button type='submit' tw='mt-10'>
                  Submit
                </Button>
              )}
            </form>
          </Form>
        </div>
      </Wrapper>
    </Section>
  );
}

export default Login;
