import React from 'react';
import { useParams } from 'react-router-dom';
import './anime.scss';

const Anime = () => {
  const { id } = useParams();

  return <div className="animePage">Anime</div>;
};

export default Anime;
