import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Solo', firstName: 'Han', age: 35 },
  { id: 2, lastName: 'Vader', firstName: 'Darth', age: 42 },
  { id: 3, lastName: 'Skywalker', firstName: 'Luke', age: 27 },
  { id: 4, lastName: 'Skywalker', firstName: 'Leia', age: 27 },
  { id: 5, lastName: null, firstName: 'Chewbacca', age: 200 },
  { id: 6, lastName: 'Fett', firstName: 'Boba', age: 66 },
  { id: 7, lastName: 'Windu', firstName: 'Mace', age: 44 },
  { id: 8, lastName: 'Jinn', firstName: 'Qui-Gon', age: 43 },
  { id: 9, lastName: 'Amidala', firstName: 'Padme', age: 27 },
];

export const DataTable = () => {

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Ships In Inventory</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }