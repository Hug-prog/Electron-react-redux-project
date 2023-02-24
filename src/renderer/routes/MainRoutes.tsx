import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Anime from 'renderer/views/Anime/Anime';
import TopCharacters from 'renderer/views/Character/TopCharacters';
import Home from 'renderer/views/Home/Home';

const MainRoutes = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="anime/">
            <Route path=":id" element={<Anime />} />
            <Route path="top-characters" element={<TopCharacters />} />
          </Route>
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default MainRoutes;
