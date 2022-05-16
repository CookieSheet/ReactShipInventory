import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { ShipForm } from '../../components'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, minWidth:130},
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'classification',
    headerName: 'Classification',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 110,
    editable: true,
  },
  {
    field: 'engine',
    headerName: 'Engine',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'max_speed',
    headerName: 'Speed',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'range',
    headerName: 'Range',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'shield',
    headerName: 'Shield',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'size',
    headerName: 'Size',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'weapons',
    headerName: 'Weapons',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

interface gridData{
  data:{
      id?:string;
  }
}

export const DataTable = () => {
  let { shipData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let[gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () =>{
      setOpen(true);
  }
  let handleClose = () =>{
      setOpen(false);
  }
  let deleteData = async () =>{
      await serverCalls.delete(`${gridData[0]}`)
      getData();
  }

  console.log(gridData) // A list of id's from checked rows

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>Characters In Inventory</h2>
      <DataGrid
        rows={shipData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
        {...shipData}
      />
      <Button onClick={handleOpen} color='primary'>Update</Button>
      <Button onClick={deleteData} color='warning'>Delete</Button>
      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
          <DialogTitle id="form-dialog-title">Update A Ship</DialogTitle>
          <DialogContent>
              <DialogContentText>Updating Character ID: {gridData[0]}</DialogContentText>
              <ShipForm id={`${gridData[0]}`}/>
          </DialogContent>
          <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
          </DialogActions>
      </Dialog>
    </div>
  );
}