import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex00 from '../Ex00.jsx';

describe('Ex00 (Etat d\'un composant)', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Ex00/>);
  });

  it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex00 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Le texte de base est bien affiché', () => {
    expect(wrapper.find('p').text()).toContain('Il y a eu 0 clic(s)');
  });

  it('Au clic sur le bouton, le texte est correctement changer', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toContain('Il y a eu 1 clic(s)');
  });
});