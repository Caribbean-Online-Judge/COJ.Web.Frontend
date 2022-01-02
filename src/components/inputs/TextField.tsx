import {
   TextField as MaterialTextField,
   TextFieldProps as MaterialTextFieldProps,
} from "@mui/material"
import { Control, Controller } from "react-hook-form"

interface TextFieldProps {
   fieldName: string
   control: Control<any, any>
   rules: Record<string, string>
   //  onChange: (value: string) => void
   textFieldProps: Omit<MaterialTextFieldProps, "value" | "onChange" | "error">
}

function TextField(props: TextFieldProps) {
   const {
      fieldName,
      control,
      rules,

      textFieldProps: { helperText, ...textFieldPropsRest },
   } = props
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
