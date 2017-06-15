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
import firstaction from './../../actions/catalog.js';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

const images1 = [{
  src: img1,
  alt: "first",
  link: "./catalog"
},{
  src: img2,
  alt: "Second",
  link: "./catalog"
},{
  src: img3,
  alt: "third",
  link: "./catalog"
}
];
const images2=[{
  src: img4,
  alt: "big",
  link: "./catalog"
}];

export default {

  path: '/catalog',

  async action() {

    const URL = `http://maysternja.dataroot.co/catalog/park/`;
    fetch(URL).then(r => r.json())
      .then(data => console.log(data))
      .catch(e => console.log("Error during request",e));

    return {
      title: "Каталог Продукції",
      chunk: 'catalog',
      component: <Layout>
        <h2 className="title">Каталог продукції</h2>
        <Decor/>
        <Small array={images1}>Складні архітектурні вироби</Small>
        <Small array={images2}>Садово паркове мистецтво</Small>
        <Aboutus/>
      </Layout>,
    };
  },

};
