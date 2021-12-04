import React, { useState } from "react"
import { Paper } from "../styles"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Judgments } from "../../../types/Judgments"
import GridLoadingOverlay from "../../../components/Grid/LoadingOverlay"
import GridNoRowsOverlay from "../../../components/Grid/NoRowsOverlay"

function Judgments(): JSX.Element {
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const columns: GridColDef[] = [
      { field: "id", headerName: "ID", flex: 0.4 },
      {
         field: "date",
         headerName: "Date",
         flex: 2,
         editable: false,
      },
      {
         field: "user",
         headerName: "User",
         flex: 2,
         editable: false,
      },
      {
         field: "problem",
         headerName: "Problem",
         flex: 2,
         editable: false,
      },
      {
         field: "judgment",
         headerName: "Judgment",
         flex: 2,
         editable: false,
      },
      {
         field: "time",
         headerName: "Time",
         flex: 2,
         editable: false,
      },
      {
         field: "mem",
         headerName: "Mem",
         flex: 2,
         editable: false,
      },
      {
         field: "size",
         headerName: "Size",
         flex: 2,
         editable: false,
      },
      {
         field: "lang",
         headerName: "Lang",
         flex: 2,
         editable: false,
      },
   ]

   const rows: Judgments[] = [
      {
         id: 2,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 3,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 4,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 5,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 6,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 7,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
      {
         id: 8,
         date: new Date(),
         judgment: "Acepted",
         lang: "C++",
         mem: 123,
         problem: 11452,
         size: 785,
         time: 889,
         user: "juan",
      },
   ]
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

export default Judgments
