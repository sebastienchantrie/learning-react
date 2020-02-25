import React, { useState } from 'react';

function Ex01() {
  const [click, setClick] = useState(0);

  return (
    <div className="ex01">
      <h1>Ex01 - Etat d'un composant 1</h1>

      <button onClick={() => setClick(click + 1)}>Compter</button>
      <p>Il y a eu {click} clic{click > 1 && 's'}.</p>
    </div>
  );
}

export default Ex01;
