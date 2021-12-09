import React from "react"
import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"
import dynamic from "next/dynamic"
import { useState } from "react"
import katex from "katex"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

export default function AddProblem(): JSX.Element {
   const mdKaTeX = `This is to display the 
\`$$c = \\pm\\sqrt{a^2 + b^2}$$\`
 in one line
\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`
\`\`\`KaTeX
\\f\\relax{x} = \\int_{-\\infty}^\\infty
    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
    \\,d\\xi
\`\`\`
`

   const [value, setValue] = useState<string | undefined>(mdKaTeX)

   return (
      <MDEditor
         value={value}
         onChange={(e) => {
            setValue(e)
         }}
         textareaProps={{
            placeholder: "Please enter Markdown text",
         }}
         height={500}
         previewOptions={{
            components: {
               code: ({ inline, children = [], className }) => {
                  const txt = children[0] || ""
                  if (inline) {
                     if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
                        const html = katex.renderToString(
                           txt.replace(/^\$\$(.*)\$\$/, "$1"),
                           {
                              throwOnError: false,
                           }
                        )
                        return <code dangerouslySetInnerHTML={{ __html: html }} />
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
                     return <code dangerouslySetInnerHTML={{ __html: html }} />
                  }
                  return <code className={String(className)}>{txt}</code>
               },
            },
         }}
      />
   )
}
