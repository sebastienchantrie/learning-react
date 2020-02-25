import React from 'react';
import Ex00 from './Ex00';

const wrapper = shallow(<Ex00 />);

describe("Ex00 (Etat d'un composant)", () => {
  /*it('match the snapshot', () => {
    const wrapper = renderer.create(<Ex00 />).toJSON();
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