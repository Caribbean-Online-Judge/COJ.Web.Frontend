import React from "react"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import "katex/dist/katex.css"
import dynamic from "next/dynamic"
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

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

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
         <Controller
            control={control}
            name="title"
            rules={{ required: "Title is requierd" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <TitleTextField
                  label={"Title"}
                  required
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
               />
            )}
         />
         <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <DescriptionTextField
                  label={"Description"}
                  multiline
                  rows={4}
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
               />
            )}
         />

         <Controller
            control={control}
            name="text"
            rules={{ required: "Markdown text is requierd" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
               <>
                  <MDEditor
                     value={value}
                     onChange={onChange}
                     textareaProps={{
                        placeholder: "Please enter Markdown text",
                     }}
                     height={500}
                     previewOptions={{
                        components: {
                           // eslint-disable-next-line react/prop-types
                           code: ({ inline, children = [], className }) => {
                              const txt = children[0] || ""
                              if (inline) {
                                 if (
                                    typeof txt === "string" &&
                                    /^\$\$(.*)\$\$/.test(txt)
                                 ) {
                                    const html = katex.renderToString(
                                       txt.replace(/^\$\$(.*)\$\$/, "$1"),
                                       {
                                          throwOnError: false,
                                       }
                                    )
                                    return (
                                       <code
                                          dangerouslySetInnerHTML={{ __html: html }}
                                       />
                                    )
                                 }
                                 return <code>{txt}</code>
                              }
                              if (
                                 typeof txt === "string" &&
                                 typeof className === "string" &&
                                 // eslint-disable-next-line react/prop-types
                                 /^language-katex/.test(
                                    className.toLocaleLowerCase()
                                 )
                              ) {
                                 const html = katex.renderToString(txt, {
                                    throwOnError: false,
                                 })
                                 return (
                                    <code
                                       dangerouslySetInnerHTML={{ __html: html }}
                                    />
                                 )
                              }
                              return <code className={String(className)}>{txt}</code>
                           },
                        },
                     }}
                  />
                  {error && (
                     <Typography align="left" color={"error"}>
                        Markdown text is requierd
                     </Typography>
                  )}
               </>
            )}
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
                  <Controller
                     control={control}
                     name="maxMemory"
                     rules={{ required: "Max Memory is requierd" }}
                     render={({
                        field: { onChange, value },
                        fieldState: { error },
                     }) => (
                        <TextField
                           fullWidth
                           value={value}
                           label={"Max Memory"}
                           type="number"
                           onChange={onChange}
                           error={!!error}
                           helperText={error ? error.message : null}
                        />
                     )}
                  />
                  <Controller
                     control={control}
                     name="maxTime"
                     rules={{ required: "Max Time is requierd" }}
                     render={({
                        field: { onChange, value },
                        fieldState: { error },
                     }) => (
                        <TextField
                           fullWidth
                           value={value}
                           label={"Max Time"}
                           type="number"
                           onChange={onChange}
                           error={!!error}
                           helperText={error ? error.message : null}
                        />
                     )}
                  />
               </CardContent>
            </Card>
         </HorizaontalBox>
         <Button onClick={handleSubmit(handleUpload)}>Create Problem</Button>
      </Box>
   )
}
