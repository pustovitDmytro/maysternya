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
import Link from '../../../components/Link'
import PropTypes from 'prop-types';
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

class Item extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className={s.item}>
        <Link to="/catalog"> <img src={this.props.src} alt={this.props.alt} className={cx(s.Photo,"photo")}/></Link>
        <Link to="/catalog" className="link">{this.props.text}</Link>
      </div>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div className={s.menu}>
        <nav className={s.catalogMenu}>
        <li className={s.list}>Внутрішнє та зовнішнє оздоблення</li>
        <li className={s.list}>Складні архітектурні вироби</li>
        <li className={s.list}>Садово паркове мистецтво</li>
        </nav>
        <Link to="/catalog" className={cx(s.button,"button")}>Каталог</Link>
      </div>
    );
  }
}

class HomeCatalog extends React.Component {
  render() {
    return (
      <div>
        <h3 className={s.title}>Каталог продукції</h3>
      <div className={s.catalog}>
        <div className={s.line}>
          <Menu/>
        {
          items.filter(elem=>elem.id<3).map(elem =>
            <Item key={elem.id} src={elem.src} alt={elem.alt} text={elem.text}/>
          )
        }
        </div>
        <div className={s.line}>
          {
            items.filter(elem=>elem.id>2).map(elem =>
              <Item key={elem.id} src={elem.src} alt={elem.alt} text={elem.text}/>
            )
          }
        </div>
      </div>
      </div>
    );
  }
}
export default withStyles(s)(HomeCatalog);
