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
import s from './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className={s.headertitle}>
        <h2 className={s.title}>Створюємо шедeври з натурального каменю власноруч</h2>
      </div>
    );
  }
}

export default withStyles(s)(Title);
