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
import s from './HeaderMobile.css';
import BigMenu from '../BigMenu';
import BurgerMenu from 'react-burger-menu';
const Menu = BurgerMenu["slide"];


class HeaderMobile extends React.Component {
  render() {
    return (
      <div className={s.mobile}>
        <h1 className={s.title}>Майстерня</h1>
        <Menu right>
          <BigMenu/>
        </Menu>
      </div>
    );
  }
}

export default withStyles(s)(HeaderMobile);

