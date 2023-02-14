import * as yup from "yup";

export const loginSchema =
  yup.object({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: yup.string().required("Please enter a password").min(6),
  });


export const registerSchema =
  yup.object({
    name: yup.string().required("Please enter a name").min(3),
     email: yup
      .string()
      .required("Please enter an email")
      .email("Please enter a valid email"),
    password: yup.string().required("Please enter a password").min(6),
  });

