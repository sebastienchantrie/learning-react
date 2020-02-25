import React from 'react';
import PropTypes from 'prop-types';

function Ex04({ data }) {
  return (
    <div className="ex04">
      <h1>Ex04 - Propriété d'un composant</h1>

      <ul>
        {data.map((val, index) => <li key={index}>{val}</li>)}
      </ul>
    </div>
  );
}

Ex04.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Ex04.defaultProps = {
  data: [13, 420, 42, 7, 4, 8, 3, 17, 30, -1, 0],
};

export default Ex04;
