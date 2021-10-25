import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from 'shared/store';

interface Props extends RouteProps {}

export const PrivateRoute = ({ ...rest }: Props) => {
  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);

  if (!auth) return <Redirect to="/login" />;

  return <Route {...rest} />;
};
