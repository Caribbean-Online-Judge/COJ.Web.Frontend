import { ITextAreaProps } from "@uiw/react-md-editor/lib/components/TextArea"
import dynamic from "next/dynamic"
import { Control, Controller } from "react-hook-form"
import katex from "katex"
import { Typography } from "@mui/material"

const DefaultMDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

interface MDEditorProps {
   fieldName: string
   control: Control<any, any>
   rules?: Record<string, string>
   editorProps?: Record<string, never>
   textAreaProps?: ITextAreaProps
}

function MDEditor(props: MDEditorProps): JSX.Element {
   const { fieldName, control, rules, editorProps, textAreaProps } = props

   // const previewCode = ({
   //    inline,
   //    children = [],
   //    className,
   // }: {
   //    inline: any
   //    className: any
   //    children: any[]
   // }) => {
   //    const txt = children[0] || ""
   //    if (inline) {
   //       if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
   //          const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, "$1"), {
   //             throwOnError: false,
   //          })
   //          return <code dangerouslySetInnerHTML={{ __html: html }} />
   //       }
   //       return <code>{txt}</code>
   //    }
   //    if (
   //       typeof txt === "string" &&
   //       typeof className === "string" &&
   //       // eslint-disable-next-line react/prop-types
   //       /^language-katex/.test(className.toLocaleLowerCase())
   //    ) {
   //       const html = katex.renderToString(txt, {
   //          throwOnError: false,
   //       })
   //       return <code dangerouslySetInnerHTML={{ __html: html }} />
   //    }
   //    return <code className={String(className)}>{txt}</code>
   // }

   ////TODO Separate the "code" component into a variable

   return (
      <Controller
         {...{ name: fieldName, control, rules }}
         render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
               <DefaultMDEditor
                  value={value}
                  onChange={onChange}
                  textareaProps={textAreaProps}
                  height={500}
                  previewOptions={{
                     components: {
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
                              /^language-katex/.test(className.toLocaleLowerCase())
                           ) {
                              const html = katex.renderToString(txt, {
                                 throwOnError: false,
                              })
                              return (
                                 <code dangerouslySetInnerHTML={{ __html: html }} />
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
   )
}

export default MDEditor
