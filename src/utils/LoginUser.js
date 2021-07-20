import createUUID from './createUUID';

const loginUser = () => {
  if (localStorage) {
    if (!localStorage.getItem('catstagram_user')) {
      const userUuid = createUUID();
      console.log(userUuid);
      localStorage.setItem('catstagram_user', userUuid);
    }
  }
};

export default loginUser;
