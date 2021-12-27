import React from "react"
import ReactMD from "react-markdown"

export default function Problem(): JSX.Element {
   const mdKaTeX = `##This is to display the 
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
   return (
      <div>
         <ReactMD>{mdKaTeX}</ReactMD>
      </div>
   )
}
