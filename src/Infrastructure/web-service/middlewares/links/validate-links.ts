import { check } from "express-validator";
import validation from "../validationResult";

export const linksValidations = [
  check("link")
    .notEmpty()
    .withMessage({ message: "Please enter your link", errorCode: 1 }),
  check("link").isLength({ min: 8 }).withMessage({
    message: "The link must be 8 charts long",
    errorCode: 1,
  }),
  check("name")
    .notEmpty()
    .withMessage({ message: "Please enter link name", errorCode: 1 }),
  check("name").isLength({ min: 4 }).withMessage({
    message: "The name must be 4 charts long",
    errorCode: 1,
  }),
  validation,
];
