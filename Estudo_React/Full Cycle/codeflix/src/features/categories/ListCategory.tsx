import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon  from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./CategorySlice";
import { Link } from "react-router-dom";
import { 
  DataGrid, GridColDef, 
  GridRenderCellParams, GridRowsProp,
  GridToolbar
} from "@mui/x-data-grid";


export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const componentsProps= {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  }

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.is_active,
    createdAt: new Date(category.created_at).toLocaleDateString("pt-BR"),
    actions: category.updated_at
  }));

  const columns: GridColDef[] = [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 1,
      renderCell: renderNameCell, 
    },
    { 
      field: 'description', 
      headerName: 'Description', 
      flex: 1,
    },
    { 
      field: 'isActive', 
      headerName: 'Active', 
      flex: 1,
      type: 'boolean',
      renderCell: renderIsActiveCell,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },
    {
      field: 'id',
      headerName: 'Actions',
      flex: 1,
      renderCell: renderActionsCell,
    }
  ];

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link 
        style={{ textDecoration: 'none'}}
        to={`/categories/edit/${rowData.id}`}
      >
        <Typography color="primary">
          {rowData.value}
        </Typography>
      </Link>
    );
  }

  function renderActionsCell(rowData: GridRenderCellParams)  {
    return (
      <IconButton 
        color="secondary"
        onClick={() => console.log("Clicked")}
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  function renderIsActiveCell(rowData: GridRenderCellParams)  {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    )
  }
 
  return (
    <Box maxWidth="lg" sx={{mt: 4, mb: 4}}>  
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{marginBottom: '1rem'}}
        >
          New Category
        </Button>
      </Box>
      {/* {categories.map((category) => (
        <Typography key={category.id}>
          {category.name}
        </Typography>
      ))} */}
      <Box sx={{ display: "flex", height: 600, }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          disableColumnFilter={true}     
          disableColumnSelector={true}
          disableDensitySelector={true}
          disableRowSelectionOnClick={true}
          componentsProps={componentsProps}
          components={{ Toolbar: GridToolbar }}
          // rowsPerPageOptions={[2, 20, 50, 100]}
          // checkboxSelection={true}
        />
      </Box>
    </Box>
    )
}