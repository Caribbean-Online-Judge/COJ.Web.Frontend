import { DataSet } from "./DataSets"

export interface ProblemDTO {
   title: string
   description?: string
   text: string | undefined
   limits: {
      time: number
      memory: number
   }
   dataSets: DataSet[]
}
