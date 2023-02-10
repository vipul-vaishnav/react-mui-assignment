import React from 'react'
import IDataTable from './interfaces/IDataTable'
import { DataGrid } from '@mui/x-data-grid'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid/models'
import { Box } from '@mui/material'

const DataTable: React.FC<IDataTable> = (props): React.ReactElement => {
  const { data } = props

  console.log(data)

  const rows: GridRowsProp = [...data]
  const cols: GridColDef[] = [
    { field: 'id', headerName: 'id', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'userId', headerName: 'User Id', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'title', headerName: 'Title', width: 400, headerAlign: 'center' },
    { field: 'body', headerName: 'Description', width: 910, headerAlign: 'center' }
  ]

  return (
    <Box sx={{ width: '100%', height: '500px' }} component="div">
      <DataGrid
        rows={rows}
        columns={cols}
        sx={{ backgroundColor: 'secondary.main', color: 'primary.contrastText' }}
        hideFooter
      />
    </Box>
  )
}
export default DataTable
