import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import useText from '../Text';

const drawerWidth = 220;

const Header = () => {
  const translator = useText();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {translator('netpardaz_panel')}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
