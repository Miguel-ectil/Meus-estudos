import { createTheme } from '@mui/material';
import { cyan, yellow, blue } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: cyan[800],
      light: yellow[400],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[800],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    }
  }
});
