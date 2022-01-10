import {
   RootContainer,
   RegisterCard,
   Typography,
   FormTextField,
   TextField,
   Button,
} from "./styles"
import { FormControl, InputLabel, MenuItem, CircularProgress } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useState } from "react"
import { Country, Institution, Language, Locale, RequestStatus } from "@/types"
import { useForm } from "react-hook-form"
import { Select } from "@/components/inputs"
import { useServerManager } from "@/api/server"

export default function Register(): JSX.Element {
   const [date, setDate] = useState(null)
   const [countries] = useState<Country[]>([
      { name: "Cuba", id: 1 },
      { name: "Mexico", id: 2 },
   ])
   const [institutios] = useState<Institution[]>([
      { name: "UCI", id: 1 },
      { name: "IPCP-Caribe", id: 2 },
   ])
   const [languages] = useState<Language[]>([
      { name: "Python", id: 1 },
      { name: "C++", id: 2 },
   ])

   const [locales] = useState<Locale[]>([
      { name: "Spanish", id: 1 },
      { name: "English", id: 2 },
   ])

   const [requestStaus, setRequestStaus] = useState<RequestStatus>("unrequested")

   const serverManager = useServerManager()

   const { handleSubmit, control, formState, getValues } = useForm({
      defaultValues: {
         username: "",
         password: "",
         confirmPassword: "",
         firstName: "",
         lastName: "",
         email: "",
         confirmEmail: "",
         birthday: new Date(),
         sex: 0,
         languageId: 0,
         countryId: 0,
         institutionId: 0,
         localeId: 0,
      },
      mode: "onChange",
   })

   const handleSignUp = () => {
      setRequestStaus("progress")
      serverManager
         .signUp(getValues())
         .then((r) => {
            setRequestStaus("successfull")
            console.log(r)
         })
         .catch(() => setRequestStaus("error"))
   }

   return (
      <RootContainer>
         <RegisterCard>
            <Typography
               align={"center"}
               color={"primary"}
               variant="h5"
               sx={{ flexGrow: 1 }}
               fontWeight={500}
            >
               Registrar Cuenta de Usuario
            </Typography>
            <FormTextField
               control={control}
               fieldName="username"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^[a-z0-9_]+$/,
                     message:
                        "The username only can have low letters, numbers and undercoach",
                  },
               }}
               id="username"
               label="Username"
               variant="outlined"
               type={"username"}
               fullWidth
               required
            />
            <FormTextField
               control={control}
               fieldName="firstName"
               rules={{ required: "This field is requierd" }}
               id="firstName"
               label="First Name"
               variant="outlined"
               fullWidth
               required
            />
            <FormTextField
               control={control}
               fieldName="lastName"
               rules={{ required: "This field is requierd" }}
               id="lastName"
               label="Last Name"
               variant="outlined"
               fullWidth
               required
            />
            <FormTextField
               control={control}
               fieldName="email"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                     message: "",
                  },
               }}
               id="email"
               label="Email"
               variant="outlined"
               fullWidth
               required
            />
            <FormTextField
               control={control}
               fieldName="confirmEmail"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                     message: "",
                  },
               }}
               id="confirmEmail"
               label="Confirm Email"
               variant="outlined"
               fullWidth
               required
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
               <DatePicker
                  label="Date of birth"
                  value={date}
                  onChange={(newValue) => {
                     setDate(newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
               />
            </LocalizationProvider>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Gender</InputLabel>
               <Select
                  control={control}
                  fieldName={"sex"}
                  rules={{ requierd: "This field is requierd" }}
                  label="Gender"
               >
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>I prefer not to say</MenuItem>
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Country</InputLabel>
               <Select
                  control={control}
                  fieldName={"countryId"}
                  rules={{ requierd: "This field is requierd" }}
                  label="Country"
               >
                  {countries.map((country, index) => (
                     <MenuItem key={index} value={country.id}>
                        {country.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Default Language</InputLabel>
               <Select
                  control={control}
                  fieldName={"localeId"}
                  rules={{ requierd: "This field is requierd" }}
                  label="Default Language"
               >
                  {locales.map((locale, index) => (
                     <MenuItem key={index} value={locale.id}>
                        {locale.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Default programming language</InputLabel>
               <Select
                  control={control}
                  fieldName={"languageId"}
                  rules={{ requierd: "This field is requierd" }}
                  label="Default programming language"
               >
                  {languages.map((language, index) => (
                     <MenuItem key={index} value={language.id}>
                        {language.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Institution</InputLabel>
               <Select
                  control={control}
                  fieldName={"institutionId"}
                  rules={{ requierd: "This field is requierd" }}
                  label="Institution"
               >
                  {institutios.map((institutio, index) => (
                     <MenuItem key={index} value={institutio.id}>
                        {institutio.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormTextField
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
               id="password"
               label="Password"
               variant="outlined"
               type="password"
               fullWidth
               required
            />
            <FormTextField
               control={control}
               fieldName="confirmPassword"
               rules={{
                  required: "This field is requierd",
                  pattern: {
                     value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                     message:
                        "The password must have at least 8 characters, two capital letters and two special characters",
                  },
                  validate: () =>
                     getValues("password") === getValues("confirmPassword")
                        ? true
                        : "Passwords do not match",
               }}
               id="confirmPassword"
               label="Confirm Password"
               variant="outlined"
               type="password"
               fullWidth
               required
            />
            <Button
               variant={"contained"}
               fullWidth
               disabled={!formState.isValid || requestStaus === "progress"}
               onClick={handleSubmit(handleSignUp)}
            >
               {requestStaus === "progress" ? (
                  <CircularProgress size={24} />
               ) : (
                  "Sign Up in COJ"
               )}
            </Button>
         </RegisterCard>
      </RootContainer>
   )
}
