import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import HomeData from './reduser';
import CatalogData from './catalog';
export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    user,
    runtime,
    intl,
    HomeData,
    CatalogData,
  });
}
