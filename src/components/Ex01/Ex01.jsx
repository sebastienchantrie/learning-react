import React from 'react';

/*function Ex01() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex01">
      <h1>Ex01 - Etat d'un composant: rendu conditionnel 1</h1>

      <code className={'res'}>
        <button>Compter</button>
        <p>Il y a eu 0 clic.</p>
      </code>
    </div>
  );
}*/

class Ex01 extends React.Component {
  render() {
    return (
      <div className="ex01">
        <h1>Ex01 - Etat d'un composant: rendu conditionnel 1</h1>

        <code className={'res'}>
          <button>Compter</button>
          <p>Il y a eu 0 clic.</p>
        </code>
      </div>
    );
  }
}

export default Ex01;
