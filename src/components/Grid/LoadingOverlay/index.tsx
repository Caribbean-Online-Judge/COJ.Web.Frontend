import { GridOverlay } from "@mui/x-data-grid"
import { LinearProgress } from "@mui/material"

function GridLoadingOverlay(): JSX.Element {
   return (
      <GridOverlay>
         <div style={{ position: "absolute", top: 0, width: "100%" }}>
            <LinearProgress />
         </div>
      </GridOverlay>
   )
}

export default GridLoadingOverlay
