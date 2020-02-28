import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex01 from '../Ex01.jsx';

describe("Ex01 (Etat d'un composant: rendu conditionnel 1)", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Ex01/>);
  });

  /*it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex01 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });*/

  it('Le texte de base est bien affiché', () => {
    expect(wrapper.find('p').text()).toContain('Il y a eu 0 clic');
  });

  it('Au clic sur le bouton, le texte est correctement changer', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toContain('Il y a eu 1 clic');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toContain('Il y a eu 2 clics');
  });
});
