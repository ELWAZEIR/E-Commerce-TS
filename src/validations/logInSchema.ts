import { z } from "zod";

const signInSchema = z
  .object({
   
    email: z.string().min(1, { message: "Email address is required" }).email(),
    password: z.string().min(1, { message: "Email address is required" }),
   });
  type logInType=z.infer<typeof signInSchema>

  export {signInSchema,type logInType}