import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { panelEntities } from '../../../router/entities';
import { useNavigate } from 'react-router-dom';
import useText from '../Text';

const drawerWidth = 220;

const PanelDrawer = () => {
  const navigate = useNavigate();
  const translator = useText();

  const goToEntity = (path: string) => () => navigate(path);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar variant="dense" />
      <Divider />
      <List>
        {panelEntities.map((item, i) => (
          <ListItem button key={i} onClick={goToEntity(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={translator(item.title)} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default PanelDrawer;
