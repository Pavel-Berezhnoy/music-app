import {
  Divider, Drawer, ListItem, ListItemButton, styled,
} from '@mui/material';

export const Line = styled(Divider)({
  backgroundColor: 'var(--theme-hover-text)',
});

export const NavItem = styled(ListItem)({
  transition: '.1s',
  ':hover': {
    backgroundColor: 'var(--theme-hover-text)',
  },
});

export const NavItemButton = styled(ListItemButton)({
  padding: '.5em 1em',
});

const NavContent = styled(Drawer)({
  '& .MuiPaper-root': {
    width: '250px',
    backgroundColor: 'var(--theme-main)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, .3)',
  },
});

export default NavContent;
