
import { Box, Typography, Paper, Grid, TextField, FormControl } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./CategorySlice";
import { useState } from "react";

export const CategoryEdit = () => {
  const id = useParams().id || "";
  const [isdisabled, setIsdisabled] = useState(false)
  const category = useAppSelector((state) => selectCategoryById(state, id));

  const handleChange = (e: any) => {
  };
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} >
                <FormControl fullWidth>
                  <TextField
                    label="Category Name"
                    name="name"
                    required
                    variant="outlined"
                    value={category.name}
                    disabled={isdisabled}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>    
    </Box>
  )
}

function useStates(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
