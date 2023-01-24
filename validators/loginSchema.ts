import Joi from "joi";

export interface LoginSchemaData {
    email: string;
    password: string;
}

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/;

export const loginSchema = Joi.object<LoginSchemaData, true>({
    email: Joi.string().label("E-mail").email({minDomainSegments: 2, tlds: false}).required(),
    password: Joi.string().label("Password").min(8).pattern(PASSWORD_REGEX).required().messages({
        "string.pattern.base": "{{#label}} must include uppercase and lowercase letters, numbers and symbols."
    })
}).prefs({
    errors: {
        wrap: {
            label: false
        }
    }
});
