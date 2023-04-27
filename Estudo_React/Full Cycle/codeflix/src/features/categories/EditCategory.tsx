
import { Box, Typography, Paper, Grid, TextField, FormControl, Button, FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Category, selectCategoryById } from "./CategorySlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CategoryFrom } from "./components/CategoryFrom";


export const CategoryEdit = () => {
  const id = useParams().id || "";
  const [isdisabled, setIsdisabled] = useState(false)
  const [category, setCategory] = useState<Category>({
    id: "",
    name: "",
    is_active: false,
    created_at: "",
    updated_at: "",
    deleted_at: "",
    description: "",
  });

  const handleChange = (e: any) => {};

  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>
        <CategoryFrom
          isLoading={false}
          category={category}
          isdisabled={isdisabled}
          onSubmit={() => {}}
          handleChange={handleChange}
          handleToggle={handleToggle}
        />
      </Paper>    
    </Box>
  )
}
