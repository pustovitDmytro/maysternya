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

export default {

  path: '/catalog',

  async action() {
    let images1=[];
    let images2=[];
    let images3=[];
    await Promise.all([park,architecture,decoration]).then(values => {images1=values[0],images2=values[1],images3=values[2]});
    return {
      title: "Каталог Продукції",
      chunk: 'catalog',
      component: <Layout>
        <h2 className="title">Каталог продукції</h2>
        <Decor array={images3}/>
        <Small array={images2}>Складні архітектурні вироби</Small>
        <Small array={images1}>Садово паркове мистецтво</Small>
        <Aboutus/>
      </Layout>,
    };
  },

};
