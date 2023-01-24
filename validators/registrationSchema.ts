
import Joi from "joi";
import {loginSchema, LoginSchemaData} from "./loginSchema";

export interface RegistrationSchemaData extends LoginSchemaData {
    firstName: string;
    lastName: string;
    confirmPassword: string;
}

const NAME_REGEX = /^[a-zA-Z]+$/;

// Prevent Elon Musk's son from playing this game
const nameSchema = Joi.string().pattern(NAME_REGEX).required().messages({
    "string.pattern.base": "{{#label}} must only contain alphabetic characters."
});

export const registrationSchema = loginSchema.append<RegistrationSchemaData>({
    firstName: nameSchema.label("First name"),
    lastName: nameSchema.label("Last name"),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
        'any.only': `Doesn't match password`
    })
}).prefs({
    errors: {
        wrap: {
            label: false
        }
    }
});
