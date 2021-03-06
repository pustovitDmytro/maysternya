/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Aboutus from '../../components/Aboutus';
import {aboutUs} from './../../actions/api';
export default {

  path: '/about',

  async action(context) {
    let store = context.store;
    await Promise.all([aboutUs(store.dispatch)]).then(values => console.log("success",values.length))
      .catch(e => console.log("Error during request",e));
    return {
      title: "Про нас",
      chunk: 'about',
      component: <Layout>
        <Aboutus source = {store.getState().HomeData.about}/>
      </Layout>,
    };
  },

};
