import { routes } from './routes';

export const NavigateTo = (navigation, path) => {
  if (routes[path]) {
    navigation.navigate(routes[path]);
  } else {
    console.error('Invalid navigation path');
  }
};


export const NavigateBack = (navigation) => {
  if (routes) {
    navigation.goBack(routes);
  } else {
    console.error('Invalid navigation path');
  }
};