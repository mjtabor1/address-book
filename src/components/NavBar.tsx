import React, {useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { routes } from '../routes';
import { IconButton, InputAdornment, TextField, Typography, AppBar, Toolbar } from '@mui/material';
import { AddressBookContext } from '../context/AddressBookContext';
import { Link } from 'react-router-dom';

const Search = styled(TextField)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const NavbarLink = styled(Link)(({ theme }) => ({
  color: 'primary.dark',
  margin: '10px',
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  textDecoration: 'none'
}));

const NavBar: React.FC = () => {
  const {searchContacts } = useContext(AddressBookContext);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchContacts(event.target.value);
  };
  
  return (
    <AppBar sx={{ backgroundColor: 'primary.light' }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          ADDRESS BOOK
        </Typography>
        {routes.map((route) => (
          <NavbarLink to={route.path}>
            {route.title}
          </NavbarLink>
        ))}
        <Search
          label="Search..."
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position={'start'}>
                <IconButton>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;