// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require("next-remove-imports")()

module.exports = removeImports({
   /**
    * @type {import('next').NextConfig}
    */

   pageExtensions: ["page.tsx"],
})
