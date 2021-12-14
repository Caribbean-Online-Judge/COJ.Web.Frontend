import {
   RootContainer,
   RegisterCard,
   Typography,
   TextField,
   FormControlLabel,
   Button,
} from "./styles"
import { FormControl, InputLabel, Select, MenuItem, Checkbox } from "@mui/material"
import { LocalizationProvider, DatePicker } from "@mui/lab"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import { useState } from "react"

interface signInData {
   user: string
   password: string
   confirmPasswor: string
   nickname: string
   name: string
   lastName: string
   gender: string
   birthDate: Date
   showBirthDate: boolean
   country: string
   institution: string
   email: string
   confirmEmail: string
   showEmail: boolean
   notifyCompetences: boolean
   notifyProblems: boolean
   notifySubmits: boolean
   notifyBoard: boolean
   languaje: string
   programingLanguaje: string
   advancedEditor: boolean
}

export default function Register(): JSX.Element {
   const [date, setDate] = useState(null)
   const [countries] = useState(["Cuba", "Colombia", "Canada", "Argentina"])
   const [languages] = useState(["Esnglis", "Spanish"])
   const [proLangs] = useState(["Java", "Python", "C++ 17"])

   const [signInData, setSignInData] = useState<signInData>({
      user: "",
      password: "",
      confirmPasswor: "",
      nickname: "",
      name: "",
      lastName: "",
      gender: "",
      birthDate: new Date(),
      showBirthDate: false,
      country: "",
      institution: "",
      email: "",
      confirmEmail: "",
      showEmail: true,
      notifyCompetences: true,
      notifyProblems: true,
      notifySubmits: true,
      notifyBoard: true,
      languaje: "",
      programingLanguaje: "",
      advancedEditor: false,
   })

   const handleChangeData =
      (prop: keyof signInData) => (event: React.ChangeEvent<HTMLInputElement>) => {
         setSignInData({ ...signInData, [prop]: event.target.value })
      }

   const emailError = signInData.email != signInData.confirmEmail
   const passwordError = signInData.password != signInData.confirmPasswor

   const disableButton =
      signInData.user === "" ||
      signInData.password === "" ||
      signInData.confirmPasswor === "" ||
      signInData.nickname === "" ||
      signInData.name === "" ||
      signInData.lastName === "" ||
      signInData.gender === "" ||
      signInData.country === "" ||
      signInData.institution === "" ||
      signInData.email === "" ||
      signInData.confirmEmail === "" ||
      signInData.languaje === "" ||
      signInData.programingLanguaje === "" ||
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
            <TextField
               onChange={handleChangeData("user")}
               required
               type={"usermane"}
               label={"User"}
               value={signInData.user}
            />
            <TextField
               required
               label={"Nickname"}
               value={signInData.nickname}
               onChange={handleChangeData("nickname")}
            />
            <TextField
               required
               label={"Name"}
               value={signInData.name}
               onChange={handleChangeData("name")}
            />
            <TextField
               required
               label={"Last Name"}
               value={signInData.lastName}
               onChange={handleChangeData("lastName")}
            />
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Gender</InputLabel>
               <Select
                  value={signInData.gender}
                  label="Gender"
                  onChange={(event) => {
                     setSignInData({ ...signInData, gender: event.target.value })
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
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.showBirthDate}
                     onChange={handleChangeData("showBirthDate")}
                  />
               }
               label="Show date of birth"
            />
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Country</InputLabel>
               <Select
                  value={signInData.country}
                  label="Country"
                  onChange={(event) => {
                     setSignInData({ ...signInData, country: event.target.value })
                  }}
               >
                  {countries.map((country, index) => (
                     <MenuItem key={index} value={country}>
                        {country}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <TextField
               required
               value={signInData.institution}
               onChange={handleChangeData("institution")}
               label={"Institution"}
            />
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
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.showEmail}
                     onChange={handleChangeData("showEmail")}
                  />
               }
               label="Show Email"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.notifyCompetences}
                     onChange={handleChangeData("notifyCompetences")}
                  />
               }
               label="Notification of new competences"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.notifyProblems}
                     onChange={handleChangeData("notifyProblems")}
                  />
               }
               label="Notification of new problems"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.notifySubmits}
                     onChange={handleChangeData("notifySubmits")}
                  />
               }
               label="Notification of submits"
            />
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.notifyBoard}
                     onChange={handleChangeData("notifyBoard")}
                  />
               }
               label="Notification of COJ Board"
            />
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Default Language</InputLabel>
               <Select
                  value={signInData.languaje}
                  label="Default Language"
                  onChange={(event) => {
                     setSignInData({ ...signInData, languaje: event.target.value })
                  }}
               >
                  {languages.map((language, index) => (
                     <MenuItem key={index} value={language}>
                        {language}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControl required sx={{ m: 1, width: "80%" }}>
               <InputLabel>Default programming language</InputLabel>
               <Select
                  value={signInData.programingLanguaje}
                  label="Default programming language"
                  onChange={(event) => {
                     setSignInData({
                        ...signInData,
                        programingLanguaje: event.target.value,
                     })
                  }}
               >
                  {proLangs.map((proLang, index) => (
                     <MenuItem key={index} value={proLang}>
                        {proLang}
                     </MenuItem>
                  ))}
               </Select>
            </FormControl>
            <FormControlLabel
               control={
                  <Checkbox
                     value={signInData.advancedEditor}
                     onChange={handleChangeData("advancedEditor")}
                  />
               }
               label="Enable Advanced Editor"
            />
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
               value={signInData.confirmPasswor}
               onChange={handleChangeData("confirmPasswor")}
               type={"password"}
               label={"Confirm Password"}
               error={passwordError}
            />
            <Button variant={"contained"} fullWidth disabled={disableButton}>
               SignUp
            </Button>
         </RegisterCard>
      </RootContainer>
   )
}
