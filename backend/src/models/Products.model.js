import mongoose, { Schema, model } from "mongoose";
import { z } from "zod";
export const regexBucket = {
  numberOnly: /^[0-9]+$/,
  letterOnly: /^[A-Za-z\s]+$/,
  IndianDateOnly: /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/,
};
export const validateProduct = z.object({
  name: z
    .string()
    .min(3, "name must have minimum 3 characters!")
    .regex(regexBucket.letterOnly, {
      message:
        "invalid name! do not use any special character or number for naming.",
    }),
  description: z
    .string()
    .min(30, "please describe more about the product")
    .max(350, "please make the description shorter!"),
  tags: z
    .array(z.string().min(1).max(25,"too big....."))
    .min(3, "atlest mention three product relative tags")
    .max(10, "max 10 tags allowed! and are more than sufficient for product")
    .default([]),
  price: z
    .string()
    .min(1, "plese set the price")
    .regex(regexBucket.numberOnly, "plese enter price in numbers!"),
  ExpiryDate: z
    .string()
    .regex(regexBucket.IndianDateOnly, {
      message: "please enter data in DD-MM-YYYY or DD/MM/YYYY format",
    })
    .transform((val, ctx) => {
      const [day, month, year] = val.split(/[-/]/).map(Number);

      // Create a native Date object using UTC to avoid local server timezone offsets
      const date = new Date(Date.UTC(year, month - 1, day));

      // Perform the calendar validity check
      const isValidCalendarDate =
        date.getUTCFullYear() === year &&
        date.getUTCMonth() === month - 1 &&
        date.getUTCDate() === day;

      if (!isValidCalendarDate) {
        // Dynamically inject the validation error into Zod's error pipeline
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid calendar date (e.g., February 31st does not exist)",
        });
        return z.NEVER;
      }

      return date; // Returns a clean, verified JavaScript Date object directly
    }),
});

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide the product name"],
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, "please give the product description"],
    trim: true,
    lowercase: true,
  },
  tags: {
    type: [String],
    required: [true, { message: "please enter alleast one relevent tag" }],
    default: [],
  },
  price: {
    type: String,
    required: [true, "plese enter the price"],
    match: [
      regexBucket.numberOnly,
      { message: "please enter price in numbers" },
    ],
  },
  ExpiryDate: {
    type: Date,
    required: [true, "please enter the expiry date"],
    match: [
      regexBucket.IndianDateOnly,
      { message: "please make date in DD/MM/YYYY OR DD-MM-YYYY FORMAT" },
    ],
  },
  // also include the bySeller feild later
},{timestamps: true});

 export const ProductRegister = model("product", productSchema);


