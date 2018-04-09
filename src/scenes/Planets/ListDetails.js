import React from 'react';
import {
  Name,
  InfoItem,
} from 'components/SwapiList/styles';

const ListDetails = ({ details }) => {
  const { name, climate, terrain, gravity } = details;

  return (
    <div>
      <Name>
        {name}
      </Name>

      <InfoItem>
        <strong>climate:</strong>
        {climate}
      </InfoItem>

      <InfoItem>
        <strong>terrain:</strong>
        {terrain}
      </InfoItem>

      <InfoItem>
        <strong>gravity:</strong>
        {gravity}
      </InfoItem>
    </div>
  );
};

export default ListDetails;
