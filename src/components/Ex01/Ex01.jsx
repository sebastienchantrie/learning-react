import React, { useState } from 'react';

/*function Ex01() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex01">
      <h1>Ex01 - Etat d'un composant 1</h1>

      <code className={'res'}>
        <button onClick={() => setClick(click + 1)}>Compter</button>
        <p>Il y a eu {click} clic{click > 1 && 's'}.</p>
      </code>
    </div>
  );
}*/

class Ex01 extends React.Component {
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
          <p>Il y a eu {click} clic{click > 1 && 's'}.</p>
        </code>
      </div>
    );
  }
}

export default Ex01;
