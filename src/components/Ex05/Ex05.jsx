import PropTypes from 'prop-types';
import React from 'react';

function Ex05({ data }) {
  return (
    <div className="ex05">
      <h1>Ex05 - Liste avancé de données</h1>

      <code className={'res'}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Count</th>
              <th>Alive</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.count}</td>
                <td>{val.alive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </code>
    </div>
  );
}

Ex05.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Ex05.defaultProps = {
  data: [
    { id: 0, count: 42, alive: 13 },
    { id: 1, count: 420, alive: 7 },
    { id: 2, count: 8, alive: 4 },
    { id: 3, count: 12, alive: 15 },
    { id: 4, count: 1.5, alive: 12 },
  ],
};

export default Ex05;
