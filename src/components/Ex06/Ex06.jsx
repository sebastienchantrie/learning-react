import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function Ex06({ data: propsData }) {
  const [data, setData] = useState(propsData);
  const [click, setClick] = useState(0);

  const deleteData = index => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  useEffect(() => {
    if (click > 0) {
      setData([...data, click]);
    }
  }, [click]);

  return (
    <div className="ex06">
      <h1>Ex06 - State & Listes</h1>

      <code className={'res'}>
        <button onClick={() => setClick(click + 1)}>Ajouter un élément</button>
        <ul>
          {data.map((val, index) => (
            <li key={index} onClick={() => deleteData(index)}>
              {val}
            </li>
          ))}
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
