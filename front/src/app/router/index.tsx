import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../widgets/navbar';

export default function Router() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div />} />
      </Routes>
    </>
  );
}
