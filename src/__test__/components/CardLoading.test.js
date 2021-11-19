import React from 'react';
import { mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CardLoading from '../../components/CardLoading';

describe('Test for <CardLoading /> component', () => {
  test('CardLoading render test', () => {
    const cardLoading = mount(
      <ProviderMock>
        <CardLoading error={null} source='Test' />
      </ProviderMock>,
    );

    expect(cardLoading.find('p').first().text()).toEqual('Loading Test...');
  });
});
