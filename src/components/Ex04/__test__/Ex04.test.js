import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ex04 from '../Ex04.jsx';

describe('Ex04 (Liste de données)', () => {
  let wrapper;
  let data;
  let quantity;

  beforeEach(() => {
    data = [];
    quantity = 5 + Math.ceil(Math.random() * 10);
    let i = quantity;
    while (i--) {
      data.push(Math.random() * 10);
    }
    wrapper = shallow(<Ex04 data={data}/>);
  });

  it('Match the snapshot', () => {
    const wrapper = renderer.create(<Ex04/>).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('La liste est bien affiché', () => {
    expect(wrapper.find('ul'));
  });

  it('Le bon nombre de donnée est affiché', () => {
    expect(wrapper.find('li')).toHaveLength(quantity);
  });
});