import {
  Divider, Drawer, ListItem, ListItemButton, styled,
} from '@mui/material';

export const Line = styled(Divider)({
  backgroundColor: 'var(--theme-secondary-text)',
});

export const NavItem = styled(ListItem)({
  transition: '.1s',
  ':hover': {
    backgroundColor: 'var(--theme-secondary-text)',
  },
});

export const NavItemButton = styled(ListItemButton)({
  padding: '.5em 1em',
});

const NavContent = styled(Drawer)({
  '& .MuiPaper-root': {
    width: '250px',
    backgroundColor: 'var(--theme-main)',
  },
});

export default NavContent;
