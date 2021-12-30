import React, { useState } from "react"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Problem } from "../../types/Problem"
import { Paper } from "./styles"
import GridLoadingOverlay from "../../components/Grid/LoadingOverlay"
import GridNoRowsOverlay from "../../components/Grid/NoRowsOverlay"
import { useServerManager } from "../../api/server"

export default function Problems(): JSX.Element {
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const serverManager = useServerManager()

   const columns: GridColDef[] = [
      { field: "id", headerName: "ID", flex: 0.4 },
      {
         field: "title",
         headerName: "Title",
         flex: 10,
         editable: false,
      },
      {
         field: "point",
         headerName: "Points",
         flex: 0.4,
         editable: false,
      },
   ]

   const rows: Problem[] = [
      {
         id: 1,
         title: "This is the first problem",
         point: 120,
      },
      {
         id: 2,
         title: "This is the secund problem",
         point: 120,
      },
      {
         id: 3,
         title: "This is the third problem",
         point: 120,
      },
      {
         id: 4,
         title: "This is the fourth problem",
         point: 120,
      },
      {
         id: 5,
         title: "This is the fifth problem",
         point: 120,
      },
      {
         id: 6,
         title: "This is the sixth problem",
         point: 120,
      },
   ]

   React.useEffect(() => {
      serverManager.getProblems().then((r) => console.log(r))
      console.log(process.env)
   })

   return (
      <Paper>
         <DataGrid
            rows={rows}
            columns={columns}
            //rowsPerPageOptions={[5, 10, 20]}
            paginationMode={"client"}
            pageSize={10}
            pagination
            loading={isLoading}
            autoHeight
            autoPageSize
            disableSelectionOnClick
            components={{
               LoadingOverlay: GridLoadingOverlay,
               NoRowsOverlay: GridNoRowsOverlay,
            }}
            filterMode={"client"}
            filterModel={{
               items: [
                  {
                     columnField: "title",
                     operatorValue: "contains",
                     value: "",
                  },
               ],
            }}
         />
      </Paper>
   )
}
