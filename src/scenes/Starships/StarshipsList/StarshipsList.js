import React from 'react';
import styled from 'styled-components';
import Starship from './Starship';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilmsList = ({ list }) => {
  return (
    <List>
      {list.map(item => <Starship key={item.url} item={item} />)}
    </List>
  );
};

export default FilmsList;
