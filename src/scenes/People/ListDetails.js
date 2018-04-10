import React from 'react';
import {
  Name,
  InfoItem,
} from 'components/SwapiList/styles';

const ListDetails = ({ details }) => {
  const { name, birth_year, gender } = details;

  return (
    <div>
      <Name>
        {name}
      </Name>

      <InfoItem>
        <strong>birth year:</strong>
        {birth_year}
      </InfoItem>

      <InfoItem>
        <strong>gender:</strong>
        {gender}
      </InfoItem>
    </div>
  );
};

export default ListDetails;
