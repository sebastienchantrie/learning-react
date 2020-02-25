import React, { useState } from 'react';

function Ex00() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex00">
      <h1>Ex00 - Etat d'un composant</h1>

      <button onClick={() => setClick(click + 1)}>Compter</button>
      <p>Il y a eu {click} clic(s)</p>
    </div>
  );
}

export default Ex00;
