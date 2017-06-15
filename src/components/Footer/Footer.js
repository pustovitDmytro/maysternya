/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import Aboutus from '../Aboutus';
import Tiles from '../Tiles';
import Forma from '../Forma';
import Map from '../Map';


class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Aboutus></Aboutus>
        <Tiles></Tiles>
        <Forma></Forma>
        <Map></Map>


      </div>
    );
  }
}

export default withStyles(s)(Footer);
