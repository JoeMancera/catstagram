import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import SearchForm from '../../components/SearchForm';

describe('Test for <Searchform /> component', () => {
  test('SearchForm render test, should return 1', () => {
    const searchForm = shallow(
      <ProviderMock>
        <SearchForm />
      </ProviderMock>,
    );

    expect(searchForm.length).toEqual(1);
  });

  test('Search button onClick testing, should return 1', () => {
    const handleSearchOnChange = jest.fn();
    const handleSearchOnClick = jest.fn();

    const wrapper = mount(
      <ProviderMock>
        <SearchForm
          onChange={handleSearchOnChange}
          onClick={handleSearchOnClick}
        />
      </ProviderMock>,
    );

    wrapper.find('button').simulate('click');
    expect(handleSearchOnClick).toHaveBeenCalledTimes(1);
  });
});

