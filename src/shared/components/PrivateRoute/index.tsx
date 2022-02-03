import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from 'shared/store';

interface Props extends RouteProps {}

export const PrivateRoute = ({ ...rest }: Props) => {
  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const authToken = useSelector<RootState>((state) => state.auth.authToken);

  if (!auth && !authToken) return <Redirect to="/login" />;

  return <Route {...rest} />;
};
