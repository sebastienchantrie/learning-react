import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Ex03Text = ({ count }) => (
  <p>
    {count === 0
      ? 'Il n\'y a pas encore eu de clic.'
      : `Il y a eu ${count} ${count > 1 ? 'clics' : 'clic'}.`}
  </p>
);

Ex03Text.propTypes = {
  count: PropTypes.number.isRequired,
};

function Ex03() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex03">
      <h1>Ex03 - Propriété d'un composant</h1>

      <code className={'res'}>
        <button onClick={() => setClick(click + 1)}>Compter</button>
        <Ex03Text count={click}/>
      </code>
    </div>
  );
}


export {
  Ex03Text,
};
export default Ex03;
