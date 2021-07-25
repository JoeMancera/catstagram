import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CardSearch from '../../components/CardSearch';

describe('Test for <CardSearch /> component', () => {

  test('CardSearch render test', () => {
    const cardSearch = shallow(
      <ProviderMock>
        <CardSearch />
      </ProviderMock>,
    );

    expect(cardSearch.length).toEqual(1);
  });

});
