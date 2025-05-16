import { z } from "zod";
const nameRegex = /^[A-Za-z]+$/;
const signUpSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }).max(7).regex(nameRegex, { message: "First name must contain only letters" }),
    lastName: z.string().min(1, { message: "Last name is required" }).max(7).regex(nameRegex, { message: "First name must contain only letters" }),
    email: z.string().min(1, { message: "Email address is required" }).email().max(25),
    password: z
      .string().max(15)
      .min(8, { message: "Password must be at least 8 characters longs" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "Password should contain at least 1 special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });
  type signUpType=z.infer<typeof signUpSchema>

  export {signUpSchema,type signUpType}