/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import HeaderMobile from '../Header/HeaderMobile';
import HeaderHome from '../Header/HeaderHome';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <HeaderMobile menu={false}/>
        {
          (this.props.isHome)?<HeaderHome />:<Header/>
        }
        {this.props.children}
      </div>
    )
  }
}

export default withStyles(normalizeCss, s)(Layout);
