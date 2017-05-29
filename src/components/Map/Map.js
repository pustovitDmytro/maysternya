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
import s from './map.css';
import mapUrl from './map.jpg';

class Map extends React.Component {
  render() {
    return (
      <div className={s.map}>
        <div className={s.map_img}>
        <img src={mapUrl} width="660" height="320" alt="Map" />
        	
        </div>
        <div className={s.map_contact}>
        	<h4>Контакти</h4>
        	<p className={s.map_tel}>+38 066 445 59 00</p>
        	<p className={s.map_contact_adress}>м. Мукачеко вул. Переяславська, 1</p>
   
        		<ul className={s.map_link}>
        			<li><a href='#'>Каталог продукції</a></li>
        			<li><a href='#'>Про нас</a></li>
        			<li><a href='#'>Наші роботи</a></li>
        		</ul>
 
        </div>
        
      </div>
    );
  }
}

export default withStyles(s)(Map);
