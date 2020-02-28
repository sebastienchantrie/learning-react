import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex02 from '../Ex02.jsx';

describe("Ex02 (Etat d'un composant: rendu conditionnel 2)", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Ex02/>);
  });

  /*it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex02 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });*/

  it('Le texte de base est bien affiché', () => {
    expect(wrapper.find('p').text()).toContain('Il n\'y a pas encore eu de clic.');
  });

  it('Au clic sur le bouton, le texte est correctement changer', () => {
    expect(wrapper.find('p').text()).toContain('Il n\'y a pas encore eu de clic.');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toContain('Il y a eu 1 clic');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toContain('Il y a eu 2 clics');
  });
});
