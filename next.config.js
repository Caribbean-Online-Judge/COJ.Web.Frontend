// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require("next-remove-imports")()

module.exports = removeImports({
   /**
    * @type {import('next').NextConfig}
    */

   env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
   },
   pageExtensions: ["page.tsx"],
})
