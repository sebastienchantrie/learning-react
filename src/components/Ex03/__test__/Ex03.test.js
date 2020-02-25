import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex03, { Ex03Text } from '../Ex03.jsx';

describe('Ex03 (Propriété d\'un composant)', () => {

  it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex03 />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Le composant Ex03Text esy bien affiché', () => {
    const wrapper = shallow(<Ex03/>);
    expect(wrapper.children().find('Ex03Text'));
  });

  it('Le texte de base est bien affiché', () => {
    const wrapper = shallow(<Ex03Text count={0}/>);
    expect(wrapper.find('p').text()).toContain('Il n\'y a pas encore eu de clic.');
  });

  it('Affichage correct pour un clic', () => {
    const wrapper = shallow(<Ex03Text count={1}/>);
    expect(wrapper.find('p').text()).toContain('Il y a eu 1 clic');
  });

  it('Affichage correct pour plus d\'un clic', () => {
    const wrapper = shallow(<Ex03Text count={2}/>);
    expect(wrapper.find('p').text()).toContain('Il y a eu 2 clic');
  });
});