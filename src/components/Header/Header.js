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
import s from './Header.css';
import Logo from './Logo';
import BigMenu from './BigMenu';
import ShortMenu from './ShortMenu';
import Title from './Title';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo/>
        <div className={s.mainpart}>
        <div className={s.big}>
        <Title/>
        <ShortMenu/>
        </div>
          <div className={s.small}>
        <BigMenu/></div>
          </div>
        </header>
    );
  }
}

export default withStyles(s)(Header);
