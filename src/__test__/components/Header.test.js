import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Tests for <Header /> component', () => {

  test('Header render test', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('Header Title render test', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.title').text()).toEqual('Catstagram');
  });
});
