/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import {instagram} from './../../actions/api';
import {aboutUs} from './../../actions/api';
export default {
  path: '/',
  async action(context) {
    let store = context.store;
    await Promise.all([instagram(store.dispatch),aboutUs(store.dispatch)]).then(values => console.log("success",values.length))
      .catch(e => console.log("Error during request",e));
    //console.log("store",store.getState());
    return {
      title: 'Home',
      component: <Layout isHome={true}><Home source = {store.getState().HomeData}/></Layout>
    };
  },

};
