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
import s from './Home.css';

import HomeCatalog from './HomeCatalog';

import Tiles from './../../components/Tiles';
import Aboutus from './../../components/Aboutus';
class Home extends React.Component {

  render() {
    return (
      <div>
      <HomeCatalog>
      </HomeCatalog>
      <Aboutus source = {this.props.source.about}/>
      <Tiles source = {this.props.source.works}/>
      </div>
    );
  }
}

export default withStyles(s)(Home);
