import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Switch,
    TextField
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Category } from "../CategorySlice";


type Props = {
    category: Category;
    isdisabled?: boolean;
    isLoading?: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

export function CategoryFrom({
  category,
  isdisabled = false,
  isLoading = false,
  onSubmit,
  handleChange,
  handleToggle,
  }: Props) {

  return (
    <Box p={2}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <FormControl fullWidth>
                <TextField
                label="Name"
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

        <Grid item xs={12} sx={{mt: 2}}>
            <FormControl fullWidth>
            <TextField
                label="Description"
                name="description"
                required
                value={category.description}
                disabled={isdisabled}
                onChange={handleChange}
            />
            </FormControl>
        </Grid>
        <Grid item xs={12} sx={{my: 1}} >
            <FormGroup>
            <FormControlLabel
                control={
                <Switch 
                    name="is_active"
                    color="secondary"
                    onChange={handleToggle}
                    // checked={category.is_active} 
                    inputProps={{"aria-label": "controlled"}}
                />
                }
                label="Active"
            />
            </FormGroup>
        </Grid>

        <Grid item xs={12} >
            <Box display="flex" gap={2}>
            <Button
                variant="contained"
                component={Link}
                to="/categories"
            >
                Back
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isdisabled}
            >
                Save
            </Button>
            </Box>
        </Grid>
        </form>
    </Box>
  )
}
