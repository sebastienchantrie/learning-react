import React from 'react';

/*function Ex00() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex00">
      <h1>Ex00 - Etat d'un composant</h1>

      <code className={'res'}>
        <button>Compter</button>
        <p>Il y a eu 0 clic(s).</p>
      </code>
    </div>
  );
}*/

class Ex00 extends React.Component {
  render() {
    return (
      <div className="ex00">
        <h1>Ex00 - Etat d'un composant</h1>

        <code className={'res'}>
          <button>Compter</button>
          <p>Il y a eu 0 clic(s).</p>
        </code>
      </div>
    );
  }
}

export default Ex00;
