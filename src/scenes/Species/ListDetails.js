import React from 'react';
import {
  Name,
  InfoItem,
} from 'components/SwapiList/styles';

const ListDetails = ({ details }) => {
  const { name, classification, language, designation } = details;

  return (
    <div>
      <Name>
        {name}
      </Name>

      <InfoItem>
        <strong>classification:</strong>
        {classification}
      </InfoItem>

      <InfoItem>
        <strong>language:</strong>
        {language}
      </InfoItem>

      <InfoItem>
        <strong>designation:</strong>
        {designation}
      </InfoItem>
    </div>
  );
};

export default ListDetails;
