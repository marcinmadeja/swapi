import React from 'react';
import {
  Name,
  InfoItem,
} from 'components/SwapiList/styles';

const ListDetails = ({ details }) => {
  const { name, model, manufacturer } = details;

  return (
    <div>
      <Name>
        {name}
      </Name>

      <InfoItem>
        <strong>model:</strong>
        {model}
      </InfoItem>

      <InfoItem>
        <strong>manufacturer:</strong>
        {manufacturer}
      </InfoItem>
    </div>
  );
};

export default ListDetails;
