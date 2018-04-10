import React from 'react';

const DefaultContent = ({
  details: {
    cost_in_credits,
    length,
    crew,
    passengers,
    starship_class,
  },
}) => {
  return (
    <div>
      starship class: <strong>{starship_class}</strong><br />
      crew: <strong>{crew}</strong><br />
      passengers: <strong>{passengers}</strong><br />
      cost in credits: <strong>{cost_in_credits}</strong><br />
      length: <strong>{length}</strong><br />
    </div>
  );
};

export default DefaultContent;
