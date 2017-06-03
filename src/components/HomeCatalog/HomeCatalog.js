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
import s from './HomeCatalog.css';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';

let items =[
  {
    id: 1,
    src: img1,
    text: "Портрети",
    alt: "portret"
  },
  {
    id: 2,
    src: img2,
    text: "Скульптури",
    alt: "skulpture"
  },
  {
    id: 3,
    src: img3,
    text: "Каміни",
    alt: "kamin"
  },
  {
    id: 4,
    src: img4,
    text: "Столешні",
    alt: "stoleshnya"
  },
];

class HomeCatalog extends React.Component {
  render() {
    return (
      <div className={s.bigmenu}>
        {
          items.map(elem =>
            <div className="s.item">
              <img src={elem.src}/>
            </div>
          )
        }
      </div>
    );
  }
}
export default withStyles(s)(HomeCatalog);
