import LocalStorageMock from '../../__mocks__/LocalStorageMock';
import loginUser from '../../utils/LoginUser';

describe('Testing utils functions', () => {
  test('Test login user function, should return a GUID user in localStorage', () => {
    LocalStorageMock;
    loginUser();
    expect(global.localStorage.getItem('catstagram_user')).toContain('cats');
  });
});
