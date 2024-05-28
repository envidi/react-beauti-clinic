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
import { SubmitHandler, useForm } from "react-hook-form";
import { css } from "twin.macro";
import { useState } from "react";
import EyeShow from "./EyeShow";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../api/user";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
export interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: (newUser: User) => {
      return signup(newUser);
    },
    onSuccess:()=>{
        toast.success('Signup successful',{
            position:'top-right'
        })
        form.reset()
        navigate('/signin')
    },
    onError:(error)=>{
        toast.error('Signup failed',{
            position:'top-right'
        })
        console.log(error)
    }
  });
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const formSchema = Joi.object({
    username: Joi.string().min(3).required().trim(),
    email: Joi.string().email({ tlds: { allow: ["com", "net"] } }),
    password: Joi.string()
      .pattern(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/,
      )
      .messages({
        "string.pattern.base":
          "Password should be between 8 to 20 characters and contain uppercase, lowercase letters and numbers only and regex characters(@)",
        "string.min": "Password must have at least 3 characters",
      }),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
      "any.only": "Password is not match",
    }),
  });
  const form = useForm({
    resolver: joiResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit: SubmitHandler<User> = (values) => {
    mutation.mutate(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  };
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
          <TitleHeading tw='md:text-center'>Signup</TitleHeading>
          <SecondHeading tw='md:text-center mt-[0.6rem] tracking-[0.015rem] xs:w-[100%] sm:w-[80%] leading-[2.8rem]'>
            Get started with your account
          </SecondHeading>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-8 w-full z-50 mt-[1rem]'
            >
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='text-primary-footerColor font-semibold tracking-[0.03rem]'>
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-background-main outline-none border  border-[#D9DDFE] pl-[1.58rem] py-[1.45rem] rounded-[15px] placeholder:text-[#c5c5c5] placeholder:tracking-[0.05rem]'
                        placeholder='shadcn'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className='text-[red]' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
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
                  <FormItem className='flex flex-col'>
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem className='flex flex-col'>
                    <FormLabel className='text-primary-footerColor font-semibold tracking-[0.03rem]'>
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className='relative'>
                        <Input
                          className='bg-background-main outline-none border  border-[#D9DDFE] pl-[1.58rem] py-[1.45rem] rounded-[15px] placeholder:text-[#c5c5c5] placeholder:tracking-[0.05rem]'
                          type={isShowConfirm ? "text" : "password"}
                          placeholder='Your password'
                          {...field}
                        />
                        <EyeShow
                          isShow={isShowConfirm}
                          setIsShow={setIsShowConfirm}
                        />
                      </div>
                    </FormControl>

                    <FormMessage className='text-[red]' />
                  </FormItem>
                )}
              />
              <Link to={'/signin'} className="italic text-[0.9rem] text-secondary-mainColor block">Signin</Link>
              <Button type='submit'>Submit</Button>
            </form>
          </Form>
        </div>
      </Wrapper>
    </Section>
  );
}

export default Signup;
