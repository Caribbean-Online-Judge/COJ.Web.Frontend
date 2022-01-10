import { ReactNode } from "react"
import { Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material"
import { Control, Controller } from "react-hook-form"

type SelectProps = {
   fieldName: string
   control: Control<any, any>
   rules: Record<string, any>
   children: ReactNode[]
} & Omit<MuiSelectProps, "value" | "onChange" | "error">

export default function Select(props: SelectProps): JSX.Element {
   const { fieldName, control, rules, children, ...SelectProps } = props
   return (
      <Controller
         control={control}
         name={fieldName}
         rules={rules}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <MuiSelect {...{ onChange, value }} error={!!error} {...SelectProps}>
               {children}
            </MuiSelect>
         )}
      />
   )
}
