import React, { useState } from 'react';

/*function Ex02() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex02">
      <h1>Ex02 - Etat d'un composant 2</h1>

      <code className={'res'}>
        <button onClick={() => setClick(click + 1)}>Compter</button>
        <p>
          {click === 0
            ? 'Il n\'y a pas encore eu de clic.'
            : `Il y a eu ${click} ${click > 1 ? 'clics' : 'clic'}.`}
        </p>
      </code>
    </div>
  );
}*/

class Ex02 extends React.Component {
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
          <p>
            {click === 0
              ? 'Il n\'y a pas encore eu de clic.'
              : `Il y a eu ${click} ${click > 1 ? 'clics' : 'clic'}.`}
          </p>
        </code>
      </div>
    );
  }
}

export default Ex02;
