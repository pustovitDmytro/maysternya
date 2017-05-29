/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './BigMenu.css';
import logoUrl from '../logo.png';
import Link from '../../Link';

class BigMenu extends React.Component {
  render() {
    return (
      <div className={s.bigmenu}>
        <div className={s.up}>
        <img src={logoUrl} className={s.logo}>
        </img>
        <div>
        <h1 className={s.title}> Майстерня </h1>
        <p className={s.phone}>+38 066 445 59 00</p>
        <p className={s.addres}>м. Мукачево, вул. Переяславська, 1</p>
          </div>
          </div>
        <ul className={s.list}>
          <li><Link to="/catalog" className={s.item}>Каталог продукції</Link></li>
          <li><Link to="/about" className={s.item}>Про нас</Link></li>
          <li><Link to="/our_works" className={s.item}>Наші роботи</Link></li>
        </ul>
      </div>
    );
  }
}
export default withStyles(s)(BigMenu);
