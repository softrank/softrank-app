import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { RootState } from 'shared/store';

interface Props {
  allowedRoles?: string[];
}

export const RequireAuth = ({ allowedRoles }: Props) => {
  const [userRoles, setUserRoles] = useState<string[]>([]);

  const location = useLocation();
  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const authToken = useSelector<RootState>((state) => state.auth.authToken);
  const roles = useSelector<RootState>((state) => state.auth.roles);

  useEffect(() => {
    const rolesArray: string[] = roles as string[];
    setUserRoles(rolesArray);
  }, [roles]);

  if (!auth && !authToken)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return (
    <>
      {!userRoles ? (
        <Outlet />
      ) : userRoles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
      ) : (
        // <Navigate to="/" state={{ from: location }} replace />
        <></>
      )}
    </>
  );
};
