import {
   TextField as MaterialTextField,
   TextFieldProps as MaterialTextFieldProps,
} from "@mui/material"
import { Control, Controller } from "react-hook-form"

type TextFieldProps = {
   fieldName: string
   control: Control<any, any>
   rules: Record<string, any>
   //  onChange: (value: string) => void
} & Omit<MaterialTextFieldProps, "value" | "onChange" | "error">

function TextField(props: TextFieldProps) {
   const { fieldName, control, rules, helperText, ...textFieldPropsRest } = props
   return (
      <Controller
         control={control}
         name={fieldName}
         rules={rules}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <MaterialTextField
               {...{ onChange, value }}
               error={!!error}
               helperText={error ? error.message : helperText}
               {...textFieldPropsRest}
            />
         )}
      />
   )
}

export default TextField
