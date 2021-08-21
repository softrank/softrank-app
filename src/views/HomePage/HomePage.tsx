import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { Button } from 'shared/components';
import Wrapper from 'shared/components/Layouts/Wrapper';
import { authActions } from 'shared/store';
import { Hero } from './styled';

export const HomePage = () => {
  const history = useHistory();

  const redirect = () => history.push('/login');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.signOut());
  };

  return (
    <Wrapper>
      <Hero>
        <Button onClick={() => redirect()}>Login</Button>
        <Button onClick={() => handleLogout()} secondary>
          Logout
        </Button>
      </Hero>
    </Wrapper>
  );
};
