import { Schema, model } from "mongoose";
import { lowercase, trim, z } from "zod";

export const validateUser = z.object({
  username: z
    .string()
    .min(3, "minimum 3 characters needed")
    .max(20, "kitna bada naam hai yaar")
    .regex(/^[a-zA-Z0-9]+$/, { message: "please enter a valid username" }),
  phone: z
    .string()
    .min(10, "contact no. chould be of 10 characters")
    .max(12, "contact no. are not more than 12 characters")
    .regex(/^(?:\+91|91)?[6-9]\d{9}$/, {
      message: "please enter a valid number",
    }),
  email: z.string().email({ message: "please enter a valid email address" }),
  password: z
    .string()
    .min(6, "password must be of more than 6 characters")
    .max(20, { message: "maximum password limit 20 characters"}),
});

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, { message: "username is must!" }],
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, { message: "phone number is required!" }],
    unique: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, { message: "email is required!" }],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true,{message: "password is required!"}],
    unique: true,
    trim: true,
    select: false,
  },
},{timestamps: true},);

export const User = model("User", userSchema);