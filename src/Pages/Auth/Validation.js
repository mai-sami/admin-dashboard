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


export const DetailsSchema =
  yup.object({
    Test: yup.string().required("Please enter a name").min(3),
    Test1: yup.string().required("Please enter a name").min(3),
    Test2: yup.string().required("Please enter a name").min(3),
    Test3: yup.string().required("Please enter a name").min(3),
    Test4: yup.string().required("Please enter a name").min(3),
    Test5: yup.string().required("Please enter a name").min(3),
    Test6: yup.string().required("Please enter a name").min(3),
    Test7: yup.string().required("Please enter a name").min(3),
    Test8: yup.string().required("Please enter a name").min(3),
  });