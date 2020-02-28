import React from 'react';
import PropTypes from 'prop-types';

/*const Ex03Text = ({ count }) => (
  <p>Il n\'y a pas encore eu de clic.</p>
);

function Ex03() {
  return (
    <div className="ex03">
      <h1>Ex03 - Propriété d'un composant</h1>

      <code className={'res'}>
        <button>Compter</button>
        <Ex03Text count={0}/>
      </code>
    </div>
  );
}*/

class Ex03Text extends React.Component {
  render() {
    return (
      <p>Il n'y a pas encore eu de clic.</p>
    );
  }
}

Ex03Text.propTypes = {
  count: PropTypes.number.isRequired,
};

class Ex03 extends React.Component {
  render() {
    return (
      <div className="ex03">
        <h1>Ex03 - Propriété d'un composant</h1>

        <code className={'res'}>
          <button>Compter</button>
          <Ex03Text count={0}/>
        </code>
      </div>
    );
  }
}

export default Ex03;
