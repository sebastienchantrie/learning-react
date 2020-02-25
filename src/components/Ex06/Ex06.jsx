import React from 'react';
import PropTypes from 'prop-types';

function Ex06({ data }) {

  return (
    <div className="ex06">
      <h1>Ex06 - State & Listes</h1>

      <code className={'res'}>
        <button>Ajouter un élément</button>
        <ul>
          <li>
            val
          </li>
        </ul>
      </code>
    </div>
  );
}

Ex06.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

Ex06.defaultProps = {
  data: [13, 420, 42, 7, 4, 8, 3, 17, 30],
};

export default Ex06;
