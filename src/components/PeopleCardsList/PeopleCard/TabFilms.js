import React from 'react';
import { Film } from './TabFilms.styles';

const TabFilms = ({
  userData: { films },
}) => {
  if (!films.length) return 'no movies';

  return (
    <div>
      {films.map(film => <Film key={film}>{film}</Film>)}
    </div>
  );
};

export default TabFilms;
