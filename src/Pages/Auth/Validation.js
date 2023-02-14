import * as yup from "yup";

export const loginSchema =
  yup.object({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: yup.string().required("Please enter a password").min(8),
   });


export const registerSchema =
  yup.object({
    name: yup.string().required("Please enter a name").min(3),
    Surname: yup.string().required("Please enter a Surname").min(4),
    email: yup
      .string()
      .required("Please enter an email")
      .email("Please enter a valid email"),
    password: yup.string().required("Please enter a password").min(6),
    confirmPassword: yup
      .string()
      .required("Please enter password confirmation")
      .min(6)
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

