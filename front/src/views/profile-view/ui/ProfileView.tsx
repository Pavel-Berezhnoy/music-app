import {
  Box, Paper, Tabs, Tab,
} from '@mui/material';
import { useState, SyntheticEvent } from 'react';
import BaseTabItem from '../../../components/base/base-tab-item/ui/BaseTabItem';
import ProfileSongs from '../../../components/profile/profile-songs';
import { ProfileContent } from '../style/profileView';

export default function ProfileView() {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const toggleTabHandle = (e: SyntheticEvent, number: number) => setCurrentTab(number);
  return (
    <ProfileContent component={Paper} color="secondary">
      <Tabs value={currentTab} onChange={toggleTabHandle} color="secondary">
        <Tab label="Настройки" />
        <Tab label="Композиции" />
        <Tab label="Альбомы" />
        <Tab label="Статистика" />
      </Tabs>
      <BaseTabItem value={currentTab} index={0}>Настройки</BaseTabItem>
      <BaseTabItem value={currentTab} index={1}><ProfileSongs /></BaseTabItem>
      <BaseTabItem value={currentTab} index={2}>Настройки</BaseTabItem>
      <BaseTabItem value={currentTab} index={3}>Настройки</BaseTabItem>
    </ProfileContent>
  );
}
