import createUUID from './createUUID';

const loginUser = () => {
  if (localStorage) {
    if (!localStorage.getItem('catstagram_user')) {
      const userUuid = createUUID;
      console.log(userUuid);
      localStorage.setItem('catstagram_user', JSON.stringify(userUuid));
    }
  }
};

export default loginUser;
