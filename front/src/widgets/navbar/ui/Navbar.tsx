import {
  Box, List, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import HomeIcon from '@mui/icons-material/Home';
import React, { memo, useMemo } from 'react';
import NavContent, { Line, NavItem, NavItemButton } from '../styles/navbar';

function Navbar() {
  const topNav = useMemo(() => ([
    {
      text: 'Главная',
      icon: <HomeIcon color="secondary" />,
    },
    {
      text: 'Библиотека',
      icon: <LibraryMusicIcon color="secondary" />,
    }]), []);
  const centerNav = useMemo(() => (['Garry topor', 'Sagath', 'Asper X']), []);
  return (
    <Box component="nav">
      <NavContent
        color="primary"
        variant="permanent"
        open
      >
        <Typography sx={{ margin: '1em 1em 0 1em' }} variant="h6">Разделы</Typography>
        <List color="primary">
          {topNav.map((navItem) => (
            <NavItem color="primary" key={navItem.text} disablePadding>
              <NavItemButton>
                <ListItemIcon color="primary">
                  {navItem.icon}
                </ListItemIcon>
                <ListItemText primary={navItem.text} />
              </NavItemButton>
            </NavItem>
          ))}
        </List>
        <Line />
        <Typography sx={{ margin: '1em 1em 0 1em' }} variant="h6">Подписки</Typography>
        <List>
          {centerNav.map((navItem) => (
            <NavItem key={navItem} disablePadding>
              <NavItemButton>
                <ListItemText primary={navItem} />
              </NavItemButton>
            </NavItem>
          ))}
        </List>
      </NavContent>
    </Box>
  );
}

export default memo(Navbar);
