import { Card, RootContainer, TextField, Typography, Button } from "./styles"
import { useForm } from "react-hook-form"
import { useServerManager } from "@/api/server"
import { useRouter } from "next/router"

export default function RecoverPassword(): JSX.Element {
   const { control, handleSubmit, getValues, formState } = useForm({
      defaultValues: { email: "", password: "" },
      mode: "onChange",
   })

   const serverManager = useServerManager()
   const { query } = useRouter()

   const handleRecoverPassword = () => {
      serverManager.recoverPassword({
         ...getValues(),
         token: (query.token as string) || "",
      })
   }

   return (
      <RootContainer>
         <Card>
            <Typography
               align={"center"}
               color={"primary"}
               variant="h4"
               sx={{ flexGrow: 1 }}
               fontWeight={500}
            >
               Carribean Online Judge <br /> Recover Password
            </Typography>
            <TextField
               control={control}
               fieldName="email"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                     message: "",
                  },
               }}
               label="Email"
               variant="outlined"
               fullWidth
               type="email"
            />
            <TextField
               control={control}
               fieldName="password"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                     message:
                        "The password must have at least 8 characters, two capital letters and two special characters",
                  },
               }}
               label="Password"
               variant="outlined"
               fullWidth
               type="password"
            />
            <Button
               variant="contained"
               fullWidth
               disabled={!formState.isValid}
               onClick={handleSubmit(handleRecoverPassword)}
            >
               Recover Password
            </Button>
         </Card>
      </RootContainer>
   )
}
