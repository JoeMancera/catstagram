import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';

describe('Test for <Header /> component', () => {
  test('Header render test', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });
});
