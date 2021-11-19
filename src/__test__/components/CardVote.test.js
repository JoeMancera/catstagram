import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import CardVote from '../../components/CardVote';
import CatOfTheDayMock from '../../__mocks__/CatOfTheDayMock';

describe('Test for <CardVote /> component', () => {
  test('CardVote render test, should return 1', () => {
    const cardVote = shallow(
      <ProviderMock>
        <CardVote />
      </ProviderMock>,
    );

    expect(cardVote.length).toEqual(1);
  });

  test('CardVote render test error, should return 1', () => {
    const cardVote = mount(
      <ProviderMock>
        <CardVote
          catsOfTheDay={[]}
          error='Error test'
        />
      </ProviderMock>,
    );

    expect(cardVote.length).toEqual(1);
  });

  test('Click on favorite button test, should return 1', () => {
    const handleLikeCatButton = jest.fn();
    const handleFavoriteCatButton = jest.fn();
    const cardVote = mount(
      <ProviderMock>
        <CardVote
          onClickVote={handleLikeCatButton}
          onClickFavorite={handleFavoriteCatButton}
          catsOfTheDay={CatOfTheDayMock}
          error={null}
        />
      </ProviderMock>,
    );

    cardVote.find('#btn-favorite-cat').simulate('click');

    expect(handleFavoriteCatButton).toHaveBeenCalledTimes(1);
  });

  test('Click on like button test, should return 1', () => {
    const handleVoteCatButton = jest.fn();
    const handleFavoriteCatButton = jest.fn();
    const cardVote = mount(
      <ProviderMock>
        <CardVote
          onClickVote={handleVoteCatButton}
          onClickFavorite={handleFavoriteCatButton}
          catsOfTheDay={CatOfTheDayMock}
          error={null}
        />
      </ProviderMock>,
    );

    cardVote.find('#btn-like-cat').simulate('click');

    expect(handleVoteCatButton).toHaveBeenCalledTimes(1);
  });

  test('Click on dislike button test, should return 1', () => {
    const handleVoteCatButton = jest.fn();
    const handleFavoriteCatButton = jest.fn();
    const cardVote = mount(
      <ProviderMock>
        <CardVote
          onClickVote={handleVoteCatButton}
          onClickFavorite={handleFavoriteCatButton}
          catsOfTheDay={CatOfTheDayMock}
          error={null}
        />
      </ProviderMock>,
    );

    cardVote.find('#btn-dislike-cat').simulate('click');

    expect(handleVoteCatButton).toHaveBeenCalledTimes(1);
  });

});
