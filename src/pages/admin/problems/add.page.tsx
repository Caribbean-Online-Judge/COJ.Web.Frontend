import React from "react"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import "katex/dist/katex.css"

import katex from "katex"
import {
   Box,
   DescriptionTextField,
   TitleTextField,
   HorizaontalBox,
   Card,
   TextField,
} from "./styles"
import { useServerManager } from "../../../api/server"
import { Button, CardContent, CardHeader, Divider, Typography } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import { MDEditor } from "../../../components/inputs"

export default function AddProblem(): JSX.Element {
   const serverManager = useServerManager()

   const { handleSubmit, control, getValues } = useForm({
      defaultValues: {
         title: "",
         description: "",
         text: "",
         maxMemory: "",
         maxTime: "",
         //dataSets: [],
      },
   })

   const handleUpload = () => {
      // const data = new FormData()
      // Object.entries(problemData).forEach((entry) => {
      //    data.append(entry[0], entry[1])
      // })
      // serverManager.createProblem(data)
      const data = getValues()
      console.log(data)
   }

   return (
      <Box>
         <TitleTextField
            control={control}
            fieldName="title"
            rules={{ required: "Title is requierd" }}
            textFieldProps={{
               label: "Title",
               multiline: true,
               rows: 4,
               required: true,
            }}
         />

         <DescriptionTextField
            control={control}
            fieldName="description"
            rules={{ required: "Title is requierd" }}
            textFieldProps={{
               multiline: true,
               rows: 4,
               label: "Description",
            }}
         />

         <MDEditor
            control={control}
            fieldName="text"
            rules={{ required: "Markdown text is requierd" }}
            textAreaProps={{
               placeholder: "Please enter Markdown text",
            }}
         />

         <HorizaontalBox>
            <Card>
               <CardHeader title={"Data Sets"} />
               <Divider />
               <CardContent />
            </Card>
            <Card>
               <CardHeader title={"Limits"} />
               <Divider />
               <CardContent>
                  <TextField
                     control={control}
                     fieldName="maxMemory"
                     rules={{ required: "Max Memory is requierd" }}
                     textFieldProps={{
                        fullWidth: true,
                        label: "Max Memory",
                        type: "number",
                     }}
                  />
                  <TextField
                     control={control}
                     fieldName="maxTime"
                     rules={{ required: "Max Time is requierd" }}
                     textFieldProps={{
                        fullWidth: true,
                        label: "Max Time",
                        type: "number",
                     }}
                  />
               </CardContent>
            </Card>
         </HorizaontalBox>
         <Button onClick={handleSubmit(handleUpload)}>Create Problem</Button>
      </Box>
   )
}
