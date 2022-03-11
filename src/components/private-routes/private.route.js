// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//   const currentUser = useSelector((state) => state.auth.currentUser);
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!currentUser) {
//           // not logged in so redirect to login page with the return url
//           return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
//         }

//         // check if route is restricted by role
//         if (roles && roles.indexOf(currentUser.role) === -1) {
//           // role not authorised so redirect to home page
//           return <Redirect to={{ pathname: '/' }} />;
//         }

//         // authorised so return component
//         return <Component {...props} />;
//       }}
//     />
//   );
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AccessDenied from './AccessDenied';

export const PrivateRoute = ({ component: RouteComponent, roles }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const userHasRequiredRole = currentUser && roles.includes(currentUser.authority) ? true : false;

  if (currentUser && userHasRequiredRole) {
    return <RouteComponent />;
  }

  if (currentUser && !userHasRequiredRole) {
    return <AccessDenied />;
  }

  return <Navigate to="/login" />;
};
