import React from 'react';
import Ex03 from './Ex03';

const wrapper = shallow(<Ex03 />);

describe("Ex03 (Propriété d'un composant)", () => {
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