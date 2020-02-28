import React from 'react';

/*const Ex03Text = ({ count }) => (
  <p>
    {count === 0
      ? 'Il n\'y a pas encore eu de clic.'
      : <>Il y a eu {count} clic{count > 1 && 's'}.</>}
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
}*/

class Ex03Text extends React.Component {
  render() {
    const count = this.props.count;
    return (
      <p>
        {count === 0
          ? 'Il n\'y a pas encore eu de clic.'
          : <>Il y a eu {count} clic{count > 1 && 's'}.</>}
      </p>
    );
  }
}

class Ex03 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      click: 0,
    };
  }

  handleClick = () => {
    this.setState({
      click: this.state.click + 1
    })
  };

  render() {
    const click = this.state.click;

    return (
      <div className="ex03">
        <h1>Ex03 - Propriété d'un composant</h1>

        <code className={'res'}>
          <button onClick={this.handleClick}>Compter</button>
          <Ex03Text count={click}/>
        </code>
      </div>
    );
  }
}

export {
  Ex03Text,
};
export default Ex03;
