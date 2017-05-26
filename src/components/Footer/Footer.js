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
import Map from '../Map';


class Map2 extends React.Component {
  render() {
    return (
      <div class="watch me">
        <p>In dima branch In hac habitasse platea dictumst. Duis sagittis dui ac ex suscipit maximus.
Morbi pellentesque venenatis felis sed convallis. Nulla varius, nibh vitae
placerat tempus, mauris sem elementum ipsum, eget sollicitudin nisl est vel
purus. Fusce malesuada odio velit, non cursus leo fermentum id. Cras pharetra
sodales fringilla. Etiam quis est a dolor egestas pellentesque. Maecenas non
scelerisque purus, congue cursus arcu. Donec vel dapibus mi. Mauris maximus
posuere placerat. Sed et libero eu nibh tristique mollis a eget lectus. Donec
interdum augue sollicitudin vehicula hendrerit. Vivamus justo orci, molestie
ac sollicitudin ac, lobortis at tellus. Etiam rhoncus ullamcorper risus eu
tempor. Sed porttitor, neque ac efficitur gravida, arcu lacus pharetra dui, in
consequat elit tellus auctor nulla. Donec placerat elementum diam, vitae
imperdiet lectus luctus at.</p>
        <div>MAP2!!!</div>
      </div>
    );
  }
}



class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Map></Map>
        <Map2></Map2>
        <ytututuut/>
        <div className={s.container}>
          <span className={s.text}>© Your Company</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/admin">Admin</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/privacy">Privacy</Link>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/not-found">Not Found</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
