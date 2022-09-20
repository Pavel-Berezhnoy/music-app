import { styled } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileView from '../../views/profile-view/ui/ProfileView';
import Navbar from '../../widgets/navbar';

const Wrapper = styled('div')({
  marginLeft: '250px',
  padding: '1em',
  height: '100%',
  overflowY: 'auto',
});

export default function Router() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </Wrapper>
    </>
  );
}
