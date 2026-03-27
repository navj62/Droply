import * as z from "zod";

const emailOrUsernameRegex = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|[a-zA-Z0-9_.-]{3,})$/;

export const signInSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, { message: "Email or username is required" })
    .refine((value) => emailOrUsernameRegex.test(value), {
      message: "Enter a valid email or username",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});
