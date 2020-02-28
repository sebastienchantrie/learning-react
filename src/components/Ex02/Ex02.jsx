import React from 'react';

/*function Ex02() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex02">
      <h1>Ex02 - Etat d'un composant 2</h1>

      <code className={'res'}>
        <button>Compter</button>
        <p>Il n'y a pas encore eu de clic.</p>
      </code>
    </div>
  );
}*/

class Ex02 extends React.Component {
  render() {
    return (
      <div className="ex02">
        <h1>Ex02 - Etat d'un composant 2</h1>

        <code className={'res'}>
          <button>Compter</button>
          <p>Il n'y a pas encore eu de clic.</p>
        </code>
      </div>
    );
  }
}

export default Ex02;
