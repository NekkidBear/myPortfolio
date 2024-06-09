//todo
// Import the createTheme function from Material-UI's styles package
import { createTheme } from '@mui/material/styles';

// Create a new theme using the createTheme function
const theme = createTheme({
  // Define the color palette for the theme
  palette: {
    // Define the primary color. This color will be used for primary buttons, selected items, etc.
    primary: { main: '#1976d2' },
    // Define the secondary color. This color will be used for secondary buttons, secondary elements, etc.
    secondary: { main: '#dc004e' },
  },
  // Define the typography for the theme
  typography: {
    // Set the default font family. This font will be used in all typography components.
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Define the styles for h1 elements. These styles will be applied to all h1 elements.
    h1: { fontWeight: 500, fontSize: '2.5rem' },
    // Define the styles for h2 elements. These styles will be applied to all h2 elements.
    h2: { fontWeight: 500 },
    // Define the styles for body1 elements. These styles will be applied to all body1 elements.
    body1: { lineHeight: 1.6 },
  },
  // Define the styles for specific Material-UI components
  components: {
    // Override the styles for MuiButton components
    MuiButton: { 
      // Override the root style for MuiButton components. This style will be applied to all MuiButton components.
      styleOverrides: { root: { textTransform: 'none' } } 
    },
    // Override the styles for MuiDivider components
    MuiDivider: { 
      // Override the root style for MuiDivider components. This style will be applied to all MuiDivider components.
      styleOverrides: { root: { margin: '1rem 0', borderColor: 'rgba(0, 0, 0, 0.2)' } } 
    },
  },
});

// Export the theme so it can be used in other parts of the application
export default theme;