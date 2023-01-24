import React from "react";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {TextFieldProps} from "@mui/material";
import TextField from "@mui/material/TextField";

export interface FormTextFieldProps<TFieldValues extends FieldValues = FieldValues> extends Omit<TextFieldProps, "name"> {
    name: Path<TFieldValues>;
    control?: Control<TFieldValues>;
}

export function FormTextField<TFieldValues extends FieldValues = FieldValues>({ name, control, helperText, ...props }: FormTextFieldProps<TFieldValues>) {
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: {value, onChange, onBlur, ref},
                fieldState: {invalid, error},
            }) => <TextField
                {...props}
                name={name}
                value={value ?? ''}
                onChange={(e) => {
                    onChange(e)
                    if (typeof props.onChange === 'function') {
                        props.onChange(e)
                    }
                }}
                onBlur={onBlur}
                error={invalid}
                inputRef={ref}
                helperText={error?.message || helperText}
            />}
        />
    )
}
