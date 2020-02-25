import React from 'react';
import Ex02 from './Ex02';

const wrapper = shallow(<Ex02 />);

describe("Ex02 (Etat d'un composant: rendu conditionnel)", () => {
  /*it('match the snapshot', () => {
    const wrapper = renderer.create(<Ex02 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });*/

  it('Le texte de base est bien affiché', () => {
    expect(wrapper.find('p').html()).toContain('Il y a eu 0 clic(s)');
  });

  it('Au clic sur le bouton, le texte est correctement changer', () => {
    expect(wrapper.find('p').html()).toContain('Il y a eu 0 clic(s)');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').html()).toContain('Il y a eu 1 clic(s)');
  });
});