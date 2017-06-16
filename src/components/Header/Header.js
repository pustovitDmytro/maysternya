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
import cx from 'classnames';
import Link from '../Link';
import Phone from '../Phone';


class Header extends React.Component {
  render() {
    return (
      <div>
      <div className={s.header}>
        <h3 className={s.title}>Майстерня</h3>
        <div>
          <Phone className={s.phone}>+38 066 445 59 00</Phone>
          <p className={s.addres}>м. Мукачево, вул. Переяславська, 1</p>
        </div>
        <Link className={cx(s.button,"button")} to="/contact">Зв’язатись з нами</Link>
        <div className={s.languages}>
          <button className={s.lang}>УКР</button>
          <button className={s.lang}>РУС</button>
        </div>
      </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
