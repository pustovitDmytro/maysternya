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

export default {
  path: '/',
  async action() {
    let images=[];
    await Promise.all([instagram]).then(values => {images=values[0]})
      .catch(e => console.log("Error during catalog request",e));
    return {
      title: 'Home',
      component: <Layout isHome={true}><Home source = {images}/></Layout>
    };
  },

};
