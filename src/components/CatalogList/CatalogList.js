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
import s from './CatalogList.css';

const items =[
  {
    id: 1,
    src: "img/1.jpg",
    text: "Портрети",
    alt: "portret"
  },
  {
    id: 2,
    src: "img/2.jpg",
    text: "Скульптури",
    alt: "skulpture"
  },
  {
    id: 3,
    src: "img/3.jpg",
    text: "Каміни",
    alt: "kamin"
  },
  {
    id: 4,
    src: "img/4.jpg",
    text: "Столешні",
    alt: "stoleshnya"
  },
];

class CatalogList extends React.Component {
  render() {
    return (
      <div className={s.bigmenu}>
        {
          items.map(elem =>
            <div className="s.item">
              <img src="{elem.src}"/>
            </div>
          )
        }
      </div>
    );
  }
}
export default withStyles(s)(CatalogList);
