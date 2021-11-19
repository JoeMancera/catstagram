import React from 'react';
import { create } from 'react-test-renderer';
import Profile from '../../containers/Profile';
import profileUserMock from '../../__mocks__/ProfileUserMock';

describe('<Profile /> Snapshot test', () => {
  test('Testing UI Componetnt <Profile >', () => {
    const profile = create(<Profile user={profileUserMock} />);

    expect(profile.toJSON()).toMatchSnapshot();
  });
});

