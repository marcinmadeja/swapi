import React from 'react';
import { Film } from './TabFilms.styles';

const TabStarships = ({
  userData: { starships },
}) => {
  if (!starships.length) return 'no starships';

  return (
    <div>
      {starships.map(starship => <Film key={starship}>{starship}</Film>)}
    </div>
  );
};

export default TabStarships;
