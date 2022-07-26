import React from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import NavBar from './components/NavBar';

function App() {

  // them provider for MUI
  const theme = createTheme({
    palette: {
      primary: {
        light: "#D3D3D3",
        main: "#545454",
        dark: "#151515",
        contrastText: "#000",
      },
      secondary: {
        main: "#89CFF0",
        light: "#9DD9F3",
        dark: "#77C3EC",
        contrastText: "#000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{backgroundColor: 'primary.main'}}
      >
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
