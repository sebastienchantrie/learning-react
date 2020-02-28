import React, { useState } from 'react';

/*function Ex00() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex00">
      <h1>Ex00 - Etat d'un composant</h1>

      <code className={'res'}>
        <button onClick={() => setClick(click + 1)}>Compter</button>
        <p>Il y a eu {click} clic(s).</p>
      </code>
    </div>
  );
}*/

class Ex00 extends React.Component {
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
      <div className="ex00">
        <h1>Ex00 - Etat d'un composant</h1>

        <code className={'res'}>
          <button onClick={this.handleClick}>Compter</button>
          <p>Il y a eu {click} clic(s).</p>
        </code>
      </div>
    );
  }
}

export default Ex00;
