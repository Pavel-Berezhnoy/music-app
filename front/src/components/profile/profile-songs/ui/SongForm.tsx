import {
  Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField,
} from '@mui/material';
import React from 'react';

interface SongFormProp {
  open: boolean,
  toggleHandle: () => void,
}

export default function SongForm({ open, toggleHandle }: SongFormProp) {
  return (
    <Dialog open={open} onClose={toggleHandle}>
      <DialogTitle>Добавление новой композиции</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleHandle}>Cancel</Button>
        <Button onClick={toggleHandle}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
