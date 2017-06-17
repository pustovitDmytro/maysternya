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
import Small from './Small';
import Decor from './Decor';
import Aboutus from './../../components/Aboutus';
import {park} from './../../actions/api';
import {architecture} from './../../actions/api';
import {decoration} from './../../actions/api';
import {aboutUs} from './../../actions/api';

export default {

  path: '/catalog',

  async action(context) {
    let store = context.store;
    await Promise.all([park(store.dispatch),architecture(store.dispatch),decoration(store.dispatch),aboutUs(store.dispatch)])
      .then(values => console.log("success"))
      .catch(e => console.log("Error during catalog request",e));
    console.log(store.getState().CatalogData);
    return {
      title: "Каталог Продукції",
      chunk: 'catalog',
      component: <Layout>
        <h2 className="title">Каталог продукції</h2>
        <Decor array={store.getState().CatalogData.decor} context={context}/>
        <Small array={store.getState().CatalogData.architecture}>Складні архітектурні вироби</Small>
        <Small array={store.getState().CatalogData.park}>Садово паркове мистецтво</Small>
        <Aboutus source = {store.getState().HomeData.about}/>
      </Layout>,
    };
  },

};
