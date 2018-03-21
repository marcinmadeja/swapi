import React from 'react';
import Film from './Film';

const FilmsList = ({ list }) => {
  return (
    <div>
      {list.map(film => <Film key={film.episode_id} film={film} />)}
    </div>
  );
};

export default FilmsList;
