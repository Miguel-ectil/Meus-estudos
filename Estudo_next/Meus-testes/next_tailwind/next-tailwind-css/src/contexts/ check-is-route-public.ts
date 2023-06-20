import { APP_ROUTES } from '../constants/app-routes'

/** 
* 
* @param asPath any 
* @returns  boolean 
*/

export const checkIsRoutePublic = (asPath: any) => {
  const appPublicRoutes = Object.values(APP_ROUTES);

  return appPublicRoutes.includes(asPath);
};