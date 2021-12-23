/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import { useSelector } from 'react-redux'
import { Tooltip } from '@material-ui/core'
import { Launch } from '@material-ui/icons'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

/* import internal modules */
import Detail from '../Detail'
import AlertDialog from '../common/AlertDialog'

/** @description This is a functional component for data grid
 *  @version 1.0.0
 *  @since 12/22/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name DataGrid
 *  @returns {Component} Returns the data grid component
 **/

const columns = [
  { field: 'id', headerName: 'ID', width: 140 },
  {
    field: 'login',
    headerName: 'Login',
    width: 190,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 190,
  },
  {
    field: 'score',
    headerName: 'Score',
    width: 190,
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 190,
    renderCell: (params) => [
      <AlertDialog
        key={params.row.id}
        title={'User Information'}
        contentText='Here are all the details about the users'
        iconOpenButton={
          <Tooltip title='Details' placement='top-start'>
            <Launch color='primary' />
          </Tooltip>
        }
        data-cy='alertDialogDataGrid'
      >
        <Detail informationUser={params.row} />
      </AlertDialog>,
    ],
  },
]

const DataGridComponent = () => {
  const searchUsersList = useSelector((state) => state.user.searchUsers)

  return (
    <div style={{ height: 420, width: '100%' }}>
      <DataGrid
        pageSize={5}
        columns={columns}
        rows={searchUsersList}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbar,
        }}
        data-cy='dataGrid'
      />
    </div>
  )
}

export default DataGridComponent
