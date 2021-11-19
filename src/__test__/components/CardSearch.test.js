import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CatSearchResultMock from '../../__mocks__/CatSearchResultMock';
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

  test('Test mount of <CardSearch />, Shoud render comonent with image', () => {
    const wrapper = mount(
      <ProviderMock>
        <CardSearch cat={CatSearchResultMock} />
      </ProviderMock>,
    );

    expect(wrapper.find('img').prop('src')).toContain('http');
  });
});
