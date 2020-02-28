import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex05 from '../Ex05.jsx';

describe('Ex05 (Liste avancé de données)', () => {
  let wrapper;
  let data;
  let quantity;

  beforeEach(() => {
    data = [];
    quantity = 5 + Math.ceil(Math.random() * 10);
    let i = quantity;
    while (i--) {
      data.push({
        id: i,
        count: Math.ceil(Math.random() * 42),
        alive: Math.ceil(Math.random() * 13),
      });
    }
    wrapper = shallow(<Ex05 data={data}/>);
  });

  /*it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex05/>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });*/

  it('Un tableau est affiché', () => {
    expect(wrapper.find('table'));
  });

  it('Le tableau a un formatage correcte', () => {
    expect(wrapper.find('thead'));
    expect(wrapper.find('tbody'));
  });

  it('Le bon nombre de donnée est affiché', () => {
    expect(wrapper.find('tr')).toHaveLength(quantity + 1);
  });
});
