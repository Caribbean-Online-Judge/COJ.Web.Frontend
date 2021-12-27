import { RootContainer, RegisterCard, Typography, TextField, Button } from "./styles"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useState, useEffect } from "react"
import { Country, Institution, Language, Locale } from "../../../types"
import { useForm, Controller } from "react-hook-form"

interface signInData {
   username: string
   nick: string
   password: string
   confirmPassword: string
   languageId: number
   countryId: number
   institutionId: number
   localeId: number
   firstName: string
   lastName: string
   email: string
   confirmEmail: string
   birthday: Date
   sex: number
}

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

   const [signInData, setSignInData] = useState<signInData>({
      username: "",
      nick: "",
      password: "",
      confirmPassword: "",
      languageId: 0,
      countryId: 0,
      institutionId: 0,
      localeId: 0,
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      birthday: new Date(),
      sex: 0,
   })

   const { handleSubmit, reset, control, setValue, register, formState, getValues } =
      useForm({
         defaultValues: {
            username: "",
            nick: "",
            password: "",
            confirmPassword: "",
            languageId: 0,
            countryId: 0,
            institutionId: 0,
            localeId: 0,
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            birthday: new Date(),
            sex: 0,
         },
      })
   const onSubmit = (data: any) => console.log(data)

   useEffect(() => {
      console.log(formState)
   })

   const handleChangeData =
      (prop: keyof signInData) => (event: React.ChangeEvent<HTMLInputElement>) => {
         setSignInData({ ...signInData, [prop]: event.target.value })
      }

   const emailError = signInData.email != signInData.confirmEmail
   const passwordError = signInData.password != signInData.confirmPassword

   const disableButton =
      signInData.username === "" ||
      signInData.password === "" ||
      signInData.confirmPassword === "" ||
      signInData.nick === "" ||
      signInData.firstName === "" ||
      signInData.lastName === "" ||
      signInData.sex === 0 ||
      signInData.countryId === 0 ||
      signInData.institutionId === 0 ||
      signInData.email === "" ||
      signInData.confirmEmail === "" ||
      signInData.localeId === 0 ||
      emailError ||
      passwordError

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
            <Controller
               control={control}
               name="username"
               render={() => (
                  <TextField
                     //onChange={handleChangeData("username")}
                     onChange={(e) => setValue("username", e.target.value)}
                     required
                     type={"usermane"}
                     label={"Username"}
                     value={getValues("username")}
                  />
               )}
            />
            <Controller
               control={control}
               name="nick"
               render={() => (
                  <TextField
                     required
                     label={"Nickname"}
                     value={getValues("nick")}
                     //onChange={handleChangeData("nick")}
                     onChange={(e) => setValue("nick", e.target.value)}
                  />
               )}
            />
            <Controller
               control={control}
               name="firstName"
               render={() => (
                  <TextField
                     required
                     label={"First Name"}
                     value={getValues("firstName")}
                     onChange={(e) => setValue("firstName", e.target.value)}
                  />
               )}
            />
            {/* Hasta aqui se implemeto la validacion */}
            <TextField
               required
               label={"Last Name"}
               value={signInData.lastName}
               onChange={handleChangeData("lastName")}
            />
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Gender</InputLabel>
               <Select
                  value={signInData.sex}
                  label="Gender"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        sex: event.target.value as number,
                     })
                  }}
               >
                  <MenuItem value={"m"}>Male</MenuItem>
                  <MenuItem value={"f"}>Female</MenuItem>
                  <MenuItem value={"u"}>I prefer not to say</MenuItem>
               </Select>
            </FormControl>
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
               <InputLabel>Country</InputLabel>
               <Select
                  value={signInData.countryId}
                  label="Country"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        countryId: event.target.value as number,
                     })
                  }}
               >
                  {countries.map((country, index) => (
                     <MenuItem key={index} value={country.id}>
                        {country.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Language</InputLabel>
               <Select
                  value={signInData.countryId}
                  label="Language"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        localeId: event.target.value as number,
                     })
                  }}
               >
                  {locales.map((locale, index) => (
                     <MenuItem key={index} value={locale.id}>
                        {locale.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <TextField
               required
               value={signInData.email}
               onChange={handleChangeData("email")}
               type={"email"}
               label={"Email"}
               error={emailError}
            />
            <TextField
               required
               value={signInData.confirmEmail}
               onChange={handleChangeData("confirmEmail")}
               type={"email"}
               label={"Confirm Email"}
               error={emailError}
            />
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Default Language</InputLabel>
               <Select
                  value={signInData.localeId}
                  label="Default Language"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        localeId: event.target.value as number,
                     })
                  }}
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
                  value={signInData.languageId}
                  label="Default programming language"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        languageId: event.target.value as number,
                     })
                  }}
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
                  value={signInData.institutionId}
                  label="Institution"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        institutionId: event.target.value as number,
                     })
                  }}
               >
                  {institutios.map((institutio, index) => (
                     <MenuItem key={index} value={institutio.id}>
                        {institutio.name}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <TextField
               required
               value={signInData.password}
               onChange={handleChangeData("password")}
               type={"password"}
               label={"Password"}
               error={passwordError}
            />
            <TextField
               required
               value={signInData.confirmPassword}
               onChange={handleChangeData("confirmPassword")}
               type={"password"}
               label={"Confirm Password"}
               error={passwordError}
            />
            <Button variant={"contained"} fullWidth disabled={disableButton}>
               Sign Up in COJ
            </Button>
         </RegisterCard>
      </RootContainer>
   )
}
