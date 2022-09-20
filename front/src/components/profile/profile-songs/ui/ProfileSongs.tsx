import { Box, Button } from '@mui/material';
import { useState } from 'react';
import SongForm from './SongForm';

export default function ProfileSongs() {
  const [toggleCreation, setToggleCreation] = useState<boolean>(false);

  const toggleCreationHandle = () => setToggleCreation(!toggleCreation);
  return (
    <Box>
      <Button onClick={toggleCreationHandle}>Добавить песню</Button>
      {toggleCreation && <SongForm open={toggleCreation} toggleHandle={toggleCreationHandle} />}
    </Box>
  );
}
